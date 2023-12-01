import { Component, OnInit } from '@angular/core';
import { PostStructure } from 'src/app/interfaces/post-structure';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss'],
})
export class InactivePostsComponent implements OnInit {
  posts: PostStructure[] = [];
  constructor(private postsrv: PostsService) {
    /*this.postsrv.getPosts().then((posts) => {
      this.posts = posts;
    });*/
  }

  ngOnInit(): void {
    this.posts = this.postsrv.getPosts();
  }

  alterPosts(i: number): void {
    this.postsrv.alterActive(i);
  }
}
