import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { UserProfileService } from '../services/user-profile.service';
import { UserProfile } from '../models/user-profile';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-user-profile-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    NgIf,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './user-profile-edit.component.html',
  styleUrl: './user-profile-edit.component.scss',
})
export class UserProfileEditComponent implements OnInit {
  profileForm: FormGroup;
  profilePicture: string | ArrayBuffer | null | undefined = null;
  loading = false;

  private userService = inject(UserProfileService);

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.pattern('^[0-9]*$')]],
      profilePicture: [null],
    });
  }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.userService.loadUserProfile().subscribe((data) => {
      this.profileForm.patchValue(data[0]);
      //
      this.profilePicture = data[0].profilePicture;
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.profilePicture = e.target?.result;
        this.profileForm.get('profilePicture')?.setValue(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.profileForm.valid) {
      this.loading = true;

      const userFormData: UserProfile = {
        ...this.profileForm.value,
        id: 1,
      };

      this.userService.updateUserProfile(userFormData).subscribe({
        next: () => {
          (this.loading = false), alert('User profile updated successfully!');
        },
        error: () => {
          (this.loading = false), alert('Error updating profile!');
        },
      });
    }
  }

  onCancel() {
    this.profileForm.reset();
    this.loadUserProfile();
  }
}
