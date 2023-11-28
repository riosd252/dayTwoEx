import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: any[] = [];
  constructor() {}

  getPosts(): void {
    fetch('./assets/db.json')
      .then((resp) => resp.json())
      .then((posts) => posts.forEach((post: any) => this.posts.push(post)));
  }
}
