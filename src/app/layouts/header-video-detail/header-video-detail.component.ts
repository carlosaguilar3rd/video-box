import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-video-detail',
  templateUrl: './header-video-detail.component.html',
  styleUrls: ['./header-video-detail.component.css']
})
export class HeaderVideoDetailComponent implements OnInit {

  posts: any;
  constructor(private http: HttpClient, private location: Location, private router: Router) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/users/self')
      .subscribe((data) => {
        this.posts = data;
      });
  }

  goBack() {
    this.location.back();
  }

}
