import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  // Function to check if the current route is active
  isActive(route: string): boolean {
    console.log('isActive', route);
    return this.router.url === route;
  }

  logout() {
    localStorage.removeItem('authToken'); // Clear the authentication token
    this.router.navigate(['/login']); // Redirect to login page
  }
}
