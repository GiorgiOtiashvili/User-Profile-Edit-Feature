import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

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

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.url === '/edit-profile'
          ? (this.buttonText = 'Home page')
          : (this.buttonText = 'Edit profile');
      }
    });
  }

  navigate() {
    this.router.url === '/edit-profile'
      ? this.router.navigate(['/'])
      : this.router.navigate(['/edit-profile']);
  }
}
