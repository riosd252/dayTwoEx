import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent implements OnInit {
  constructor(private postSrv: PostsService) {}

  ngOnInit(): void {
    this.postSrv.getPosts();
    const posts = this.postSrv.posts;
    const activePosts = posts.filter((post) => post.active === true);
    console.log(activePosts);
  }
}
