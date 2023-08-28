import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
  @Input() post:Post={} as Post;
  @Output() PostLiked = new EventEmitter<Post>();


   plusOne():void{
    
 this.PostLiked.emit(this.post);
   }
}
