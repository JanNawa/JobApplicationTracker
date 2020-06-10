import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params, Data } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from '../services/validation.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submitted = false;

  MIN_NAME_LENGTH: number = 4;
  MAX_NAME_LENGTH: number = 30;
  MIN_PASSWORD_LENGTH: number = 15;

  constructor(private router: Router, private _formBuilder: FormBuilder, private customValidator: ValidationService) {

  }

  ngOnInit(): void {
    this.signupForm = this._formBuilder.group({
      email: ['',
        [Validators.required,
          this.customValidator.emailValidator()]
      ],
      name: ['',
        [Validators.required,
        Validators.minLength(this.MIN_NAME_LENGTH),
        Validators.maxLength(this.MAX_NAME_LENGTH)]
      ],
      password: ['',
        [Validators.required,
        Validators.minLength(this.MIN_PASSWORD_LENGTH)]
      ],
      confirmPassword: ['',
        [Validators.required]
      ]
    },
    {
      validator: this.customValidator.matchPassword('password', 'confirmPassword'),
    });
  }

  get signupFormControl() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.signupForm.valid) {
      alert('Check your email to verify your email.\nCheck the values in browser console.');
      console.table(this.signupForm.value);
      this.signupForm.reset();
      this.router.navigate(['/login']);
    }
  }
}
