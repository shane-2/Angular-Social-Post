import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent {
  @Output() PostLiked = new EventEmitter<Post>();
listPosts:Post[]=[
  {
    title:"Shalom",
    thought: "Hello fellow kids",
    upvotes: 0
  },
  {
    title:"Hello",
    thought: "Shalom fellow kids",
    upvotes: 0
  },
  {
    title:"Bonjour",
    thought: "Hello friends",
    upvotes: 0
  },
  {
    title:"Shalom2",
    thought: "Hello fellow kids",
    upvotes: 0
  },
  {
    title:"Shalom3",
    thought: "How is it going",
    upvotes: 0
  }
];

onSubmit(post:Post):void{
  this.listPosts.push(post);
}

//  plusOne(post:Post):void{
//        this.PostLiked.emit(this.post);
//      }
  


}
