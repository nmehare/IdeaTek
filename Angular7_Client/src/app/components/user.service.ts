import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser:User={
    username:'',
    password:'',
    email:'',
    phone:0
  };
  uri='http://localhost:3000';
  constructor( private http: HttpClient) { }

//pass this to method whcih does not need authentication
  noAuthHeader= {headers:new HttpHeaders({'noAuth':'True'})};
//request to nodejs api
  logInNode(authCredentials){
    return this.http.post(`${this.uri}/login`,authCredentials);
  }

  registerUser(user:User){
    return this.http.post(`${this.uri}/register`,user);
  }


  //helper methods
  getToken(){
   return localStorage.getItem('token');
  }

  setToken(token:string){
    localStorage.setItem('token',token);
  }

  deleteToken(){
    localStorage.removeItem('token');
  }

  getUserPayload(){
    var token = localStorage.getItem('token');
    if(token){
      var userPayload = atob(token.split('.')[1]);//decode and encode data
      return JSON.parse(userPayload);
    }
    else{
      return null;
    }
  }

  isLoggedIn(){
    var userPayload = this.getUserPayload();
    if(userPayload){
      return userPayload.exp > Date.now() / 1000;
    }
    else{
      return false;
    }
  }

}

