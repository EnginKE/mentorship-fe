import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { MentorRequestComponent } from './components/mentor-request/mentor-request.component';
import { MentoringApplicationComponent } from './components/mentoring-application/mentoring-application.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule ,Route } from '@angular/router';

const routeConfig: Route[] = [
    { path: '',
     component: HomeComponent },
     { path: 'mentorRequest',
     component: MentorRequestComponent },
     { path: 'mentoringApplication',
     component: MentoringApplicationComponent },
     { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MentorRequestComponent,
    MentoringApplicationComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
