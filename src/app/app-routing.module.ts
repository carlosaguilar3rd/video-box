import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoDetailsComponent } from './layouts/video-details/video-details.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'videos', component: AppComponent },
  { path: 'video-details/:id', component: VideoDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
