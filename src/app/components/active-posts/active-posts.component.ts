import { Component, OnInit } from '@angular/core';
import { PostStructure } from 'src/app/interfaces/post-structure';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent implements OnInit {
  posts: PostStructure[] = [];
  constructor(private postsrv: PostsService) {
    this.postsrv.getPosts().then((posts) => {
      this.posts = posts;
    });
  }

  ngOnInit(): void {}
}
