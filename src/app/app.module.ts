import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgetPasswordDialogComponent } from './forget-password-dialog/forget-password-dialog.component';
import { JobService } from './services/job.service';
import { ValidationService } from './services/validation.service';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { NavGuestComponent } from './nav-guest/nav-guest.component';
import { NavAuthComponent } from './nav-auth/nav-auth.component';
import { NavSearchComponent } from './nav-search/nav-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    JobSearchComponent,
    ForgetPasswordDialogComponent,
    UnderConstructionComponent,
    NavGuestComponent,
    NavAuthComponent,
    NavSearchComponent,
    PageNotFoundComponent,
    JobDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatPaginatorModule
  ],
  providers: [JobService, ValidationService],
  bootstrap: [AppComponent],
  entryComponents: [ForgetPasswordDialogComponent]
})
export class AppModule { }
