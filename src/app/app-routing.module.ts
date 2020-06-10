import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JobDetailComponent } from './job-detail/job-detail.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'job-search', children: [
      { path: '', component: JobSearchComponent },
      { path: ':jobkey', component: JobSearchComponent }
    ]
  },
  { path: 'job-detail', component: JobDetailComponent },
  { path: 'dashboard', component: UnderConstructionComponent },
  { path: 'activities', component: UnderConstructionComponent },
  { path: 'contacts', component: UnderConstructionComponent },
  { path: 'user-profile', component: UnderConstructionComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
