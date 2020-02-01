import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '../_services';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private alertService: AlertService,
      private http: HttpClient
  ) {
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) { 
          this.router.navigate(['/']);
      }
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    console.log(this.f.username.value)
    let urlSearchParams={
      'username':this.f.username.value,
      'password':this.f.password.value
    };
    let header = new HttpHeaders({'content-type': 'application/json'});
    this.http.post<{prediction:String}>("https://deborahselvi.pythonanywhere.com/loginapi",urlSearchParams,{headers : header}).subscribe(
    (response)=>
      {
        if(response['status']=='Success')
        {
          this.router.navigate(['/croppred']);
        }
        else
        {
          alert("Please Enter valid Username and Password")
        }
      },
      (error)=>{
          alert("Something went wrong");
      }
    );
}
}
