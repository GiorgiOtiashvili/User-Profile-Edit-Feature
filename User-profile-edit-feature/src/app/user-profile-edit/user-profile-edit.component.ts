import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-user-profile-edit',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, NgIf, MatButtonModule],
  templateUrl: './user-profile-edit.component.html',
  styleUrl: './user-profile-edit.component.scss',
})
export class UserProfileEditComponent implements OnInit {
  profileForm: FormGroup;
  profilePicture: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.pattern('^[0-9]*$')]],
      profilePicture: [null],
    });
  }

  ngOnInit(): void {}

  onFileChange(event: any) {}

  onSubmit() {}

  onCancel() {}
}
