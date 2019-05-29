import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class Posts1Service {

  uri='http://localhost:3000';
  constructor( private http: HttpClient) { }

  getPosts1(){
    return this.http.get(`${this.uri}/posts`);
  }

  getPosts1ById(id){
    return this.http.get(`${this.uri}/posts/${id}`);
  }

  addPost(title:string,body:string){
    alert('inside addpost method');
    const post = {
      title:title,
      body:body
    };
    return this.http.post(`${this.uri}/posts`,post);
  }

  
  updatePost(id, title,content){
    const post = {
      id:id,
      title:title,
      content:content
    };
    return this.http.post(`${this.uri}/posts/update/${id}`,post);
  }

  deletePost(id){
    return this.http.get(`${this.uri}/posts/delete/${id}`);
  }

}
