import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, UserService, AuthenticationService } from '../_services';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private authenticationService: AuthenticationService,
      private userService: UserService,
      private alertService: AlertService,
      private http:HttpClient
  ) { 
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) { 
          this.router.navigate(['/']);
      }
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]],
          email: ['', Validators.required],
          phonenumber:['', Validators.required],
          type:['', Validators.required]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    console.log("register form",this.registerForm.value)
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;
      // this.userService.register(this.registerForm.value)
      //     .pipe(first())
      //     .subscribe(
      //         data => {
      //           console.log(data);
                console.log(this.f.username.value)
                // let urlSearchParams={
                //   'username':this.f.username.value,
                //   'password':this.f.password.value,
                //   'email':this.f.email.value,
                //   'phonenumber':this.f.phonenumber,
                //   'type':this.f.type
                // };
                // console.log("url search params",urlSearchParams)
                let header = new HttpHeaders({'content-type': 'application/json'});
                this.http.post<{prediction:String}>("https://deborahselvi.pythonanywhere.com/registerapi",this.registerForm.value,{headers : header}).subscribe(
                (response)=>
                  {
                    if(response['status']=='Success')
                    {
                      this.alertService.success('Registration successful', true);
                      this.router.navigate(['/login']);
                    }
                    else
                    {
                      alert("Couldn't process registration")
                    }
                  },
                  (error)=>{
                      alert("Something went wrong");
                      this.alertService.error(error);
                      this.loading = false;
                  }
                );
                  
              }
              // ,
              // error => {
              //     this.alertService.error(error);
              //     this.loading = false;
              // });
  // }

}
