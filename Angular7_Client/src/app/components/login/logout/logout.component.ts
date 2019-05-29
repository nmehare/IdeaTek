import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userservice:UserService, private router:Router) { }

  ngOnInit() {
    this.userservice.deleteToken();
    alert("You are logged Out, please login again to add posts");
        this.router.navigateByUrl('/posts');
    // this.router.navigate(['/posts']);
  }

}