import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../posts/post.model';
import { PostsService } from '../posts.service';
import { Subscription } from 'rxjs';
import { Posts1Service } from '../posts1.service';
import { IPosts } from '../../../Posts.model';
import {Router} from '@angular/router';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts1:IPosts[];
  // posts=[
  //   {title:'First', content:'this is content of 1 post'},
  //   {title:'second', content:'this is content of 2 post'},
  //   {title:'third', content:'this is content of 3 post'}
  // ];

  //@Input() posts:Post[]=[];
  posts: Post[] = [];
  private postsSub:Subscription;
  constructor(public postsservice: PostsService, private posts1service:Posts1Service, private router:Router) { //i want to have post service instance

  }


  fetchPosts1(){
    this.posts1service
    .getPosts1()
    .subscribe((data:IPosts[])=>{
      this.posts1=data;
      console.log("data requested");
      console.log("this.posts1");
    });
  }
  ngOnDestroy(){
    
    this.postsSub.unsubscribe();
  }
  editPosts1(id){
    this.router.navigate([`/edit/${id}`]);
  }

  deletePosts1(id){
    this.posts1service.deletePost(id).subscribe(()=>{
      this.fetchPosts1();
    })
    this.router.navigate([`/edit/${id}`]);
  }


  ngOnInit() {//life cycle hook..automatical execute when compo initialised
    this.fetchPosts1();
   // this.posts1service.getPosts1().subscribe((posts) =>{
     // console.log(posts);
    //});
    this.posts = this.postsservice.getPosts();
    this.postsSub= this.postsservice.getPostUpdateListner().subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );

  }

}
