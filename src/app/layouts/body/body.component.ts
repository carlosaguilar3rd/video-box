import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  constructor(private http: HttpClient) { }
  videos: any[] = [];
  isVisible: boolean = true;

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/videos')
      .subscribe((data: any) => {
        this.videos = data;
      });
  }

  hideComponent() {
    this.isVisible = false;
  }

}
