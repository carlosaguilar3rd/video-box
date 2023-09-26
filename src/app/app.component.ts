import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Something Else';
  constructor(private router: Router) {}

  isHomeRouteActive(): boolean {
    return this.router.url === '/';
  }

  isVideoDetailActive(): boolean {
    return this.router.url === '/video-details/:id';
  }
  
}
