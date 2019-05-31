import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isactive:boolean;
  constructor(private userservice: UserService, private router:Router) {   
  }

  ngOnInit() {
    this.isactive = this.userservice.isLoggedIn();   
  }
}
