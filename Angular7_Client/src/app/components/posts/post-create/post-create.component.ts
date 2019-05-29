import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import{Post} from '../../posts/post.model';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { PostsService } from '../posts.service';
import { Posts1Service } from '../posts1.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls:['./post-create.component.css']
    
})
export class PostCreateComponent implements OnInit{
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
   // newPost = 'No Content';
    enteredContent="";
    enteredTitle="";
    posts11: Object;
    error: any;
   // @Output() postCreated=new EventEmitter<Post>();//generic type pass additional info

    constructor(public postsservice:PostsService, private posts1service:Posts1Service, private router:Router) { //i want to have post service instance  
    }

  
onAddPost(form: NgForm){
    if(form.invalid){
        return;
    }
  //  alert("InsidePost Added");
   // const post:Post={
   //     title:form.value.title,
   //     content:form.value.content
//};
    //this.postCreated.emit(post);
    
    this.posts1service
    .addPost(form.value.title,form.value.body)
    .subscribe((data)=>{
      this.posts11=data['post'];
      alert("Posts Added successfully, redirecting to posts home page");
        this.router.navigateByUrl('/posts');
      console.log("data for addition");
      console.log(this.posts11);
    }, (error => {this.error = error;
        console.log("Please Login to Add a Post");
        console.log(this.error)}) // error path
    );
   // this.posts1service.addPost(form.value.title,form.value.body);
   // alert("InsidePost Added end");
}

    // onAddPost(){

    //     const post:Post={title: this.enteredTitle,
    //     content:this.enteredContent
    // };
    // this.postCreated.emit(post);

//}
       // onAddPost(postInput: HTMLTextAreaElement){
        //console.dir(postInput);
       // this.newPost= this.enteredvalue;
        //this.newPost= postInput.value;
        //this.newPost= 'The user\'s post';
       // alert("Post Added");


         //add new post
 
    }
