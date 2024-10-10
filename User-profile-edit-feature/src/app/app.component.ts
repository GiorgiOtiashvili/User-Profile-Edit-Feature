import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { UserProfileService } from './services/user-profile.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'User-profile-edit-feature';
  buttonText: string = 'Edit profile';

  private userService = inject(UserProfileService);
  userName = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.url === '/edit-profile'
          ? (this.buttonText = 'Home page')
          : (this.buttonText = 'Edit profile');
      }
    });

    this.userService
      .loadUserProfile()
      .subscribe((data) => (this.userName = data[0].firstName));
  }

  navigate() {
    this.router.url === '/edit-profile'
      ? this.router.navigate(['/'])
      : this.router.navigate(['/edit-profile']);
  }
}
