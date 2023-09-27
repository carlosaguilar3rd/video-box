import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CommandFormComponent } from './comments/comment-form/command-form.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BodyComponent } from './layouts/body/body.component';
import { VideoDetailsComponent } from './layouts/video-details/video-details.component';
import { HeaderVideoDetailComponent } from './layouts/header-video-detail/header-video-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CommandFormComponent,
    CommentListComponent,
    BodyComponent,
    VideoDetailsComponent,
    HeaderVideoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
