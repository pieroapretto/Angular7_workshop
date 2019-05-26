import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts:any[];

  constructor(private service: PostService) { 
  }

  ngOnInit () {
    this.service.getPosts()
    .subscribe(response => {
      this.posts = response.json();
    }, 
    (error: Response) => {
      if (error.status === 404)
        console.log('this post has already been deleted')
      else
        console.log(error);
    })
  }

}
