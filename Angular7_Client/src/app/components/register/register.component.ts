import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  serverErrMsg: any;
  serverSuccessMsg: string;
  submitted = false;
  registerForm: FormGroup;
  constructor( private router:Router, private userService:UserService) { }

  ngOnInit() {

  }

  register(form:NgForm){

    this.submitted = true;

    // stop here if form is invalid
    if (form.invalid) {
        return;
    }
    
    this.userService.registerUser(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']); //for jwt successful authentication
        this.router.navigateByUrl('/login');
        alert(form.value.email);
        alert("User registered successfully");
        this.serverSuccessMsg = "User Registered Successfully";
      },
      err => {

        alert("User Already Exist");
        this.serverErrMsg = err.error.message;
      }
    )

  }
}
