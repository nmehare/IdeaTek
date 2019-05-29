import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:{
  username:'',
  password:''
};

serverErrMsg:string;
  constructor(private userService: UserService, private router:Router) { }

  ngOnInit() {
  }

  logIn(form: NgForm){
    this.userService.logInNode(form.value).subscribe(
      res => {
        this.userService.setToken(res['token']); //for jwt successful authentication
        alert("Logged-in successfully, redirecting to posts home page");
        this.router.navigateByUrl('/posts');
      },
      err => {
        this.serverErrMsg = err.error.message;
      }
    )
  }

}
