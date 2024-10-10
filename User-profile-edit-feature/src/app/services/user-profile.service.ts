import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserProfile } from '../models/user-profile';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  baseURL = '/api/data';

  constructor(private http: HttpClient) {}

  loadUserProfile() {
    return this.http.get<UserProfile[]>(this.baseURL);
  }

  updateUserProfile(userData: UserProfile) {
    return this.http.put<any>(`${this.baseURL}/${userData.id}`, userData);
  }
}
