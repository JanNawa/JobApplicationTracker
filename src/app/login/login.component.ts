import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ForgetPasswordDialogComponent } from '../forget-password-dialog/forget-password-dialog.component';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, Params, Data } from '@angular/router';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(private router: Router, public dialog: MatDialog, private _formBuilder: FormBuilder, private customValidator: ValidationService) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['',
        [Validators.required,
          this.customValidator.emailValidator()]
      ],
      password: ['',
        [Validators.required]]
    });
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      // alert('Login succesfully!!! Check the values in browser console.');
      console.table(this.loginForm.value);
      this.loginForm.reset();
      this.router.navigate(['/dashboard']);
    }
  }

  openForgetPasswordDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(ForgetPasswordDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      email => console.log("Forget password dialog output:", email)
    );
  }
}
