import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-forget-password-dialog',
  templateUrl: './forget-password-dialog.component.html',
  styleUrls: ['./forget-password-dialog.component.css']
})
export class ForgetPasswordDialogComponent implements OnInit {

    form: FormGroup;
    submitted = false;

  constructor(

    private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ForgetPasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data, 
    private customValidator: ValidationService) {

  }

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: ['',
      [Validators.required,
        this.customValidator.emailValidator()]
      ]
    });
  }

  get formControl() {
    return this.form.controls;
  }


  sendEmail() {

    this.submitted = true;

    if (this.form.valid) {
      alert('Send Password Reset Link to ' + this.form.value.email);
      this.dialogRef.close(this.form.value);
    }

  }
}
