import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileEditComponent } from './user-profile-edit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserProfileService } from '../services/user-profile.service';
import { of, throwError } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('UserProfileEditComponent', () => {
  let component: UserProfileEditComponent;
  let fixture: ComponentFixture<UserProfileEditComponent>;
  let userProfileService: UserProfileService;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserProfileEditComponent,
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserProfileEditComponent);
    component = fixture.componentInstance;

    userProfileService = TestBed.inject(UserProfileService);
    debugElement = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty values', () => {
    const form = component.profileForm;
    expect(form.get('firstName')?.value).toBe('');
    expect(form.get('lastName')?.value).toBe('');
    expect(form.get('email')?.value).toBe('');
    expect(form.get('phoneNumber')?.value).toBe('');
  });

  it('should pre-populate form data from service', () => {
    const mockData = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@gmail.com',
      phoneNumber: '1234567890',
      profilePicture: 'someImage',
    };

    spyOn(userProfileService, 'loadUserProfile').and.returnValue(
      of([mockData])
    );

    component.loadUserProfile();
    fixture.detectChanges();

    expect(component.profileForm.get('firstName')?.value).toBe('John');
    expect(component.profileForm.get('lastName')?.value).toBe('Doe');
    expect(component.profileForm.get('email')?.value).toBe(
      'john.doe@gmail.com'
    );
    expect(component.profileForm.get('phoneNumber')?.value).toBe('1234567890');
    expect(component.profilePicture).toBe('someImage');
  });

  it('should show error messages when required fields are invalid', () => {
    const firstNameInput = component.profileForm.get('firstName');
    firstNameInput?.setValue('');
    firstNameInput?.markAsTouched();

    fixture.detectChanges();

    const firstNameError = debugElement.query(
      By.css('mat-error')
    ).nativeElement;
    expect(firstNameError.textContent).toContain('First Name is required');
  });

  it('should enable form submission when form is valid', () => {
    const mockData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@gmail.com',
      phoneNumber: '1234567890',
      profilePicture: 'image',
    };

    component.profileForm.setValue(mockData);
    expect(component.profileForm.valid).toBeTrue();
  });

  it('should call updateUserProfile and handle success on form submission', () => {
    const mockData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@gmail.com',
      phoneNumber: '1234567890',
      profilePicture: 'some-image',
    };

    component.profileForm.setValue(mockData);

    spyOn(userProfileService, 'updateUserProfile').and.returnValue(
      of(mockData)
    );

    component.onSubmit();

    expect(userProfileService.updateUserProfile).toHaveBeenCalledWith({
      ...mockData,
      id: 1,
    });
    expect(component.loading).toBeFalse();
  });

  it('should handle errors on form submission', () => {
    const mockData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@gmail.com',
      phoneNumber: '1234567890',
      profilePicture: 'image',
    };

    component.profileForm.setValue(mockData);

    spyOn(userProfileService, 'updateUserProfile').and.returnValue(
      throwError(() => new Error('Error updating profile'))
    );

    spyOn(window, 'alert');
    component.onSubmit();

    expect(window.alert).toHaveBeenCalledWith('Error updating profile!');
    expect(component.loading).toBeFalse();
  });
});
