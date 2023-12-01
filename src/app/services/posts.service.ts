import { Injectable } from '@angular/core';
import { PostStructure } from '../interfaces/post-structure';

let posts: PostStructure[] = [
  {
    id: 1,
    author: 'John D. Benson',
    type: 'news',
    body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
    title:
      'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.',
    active: true,
  },
  {
    id: 2,
    author: 'John D. Benson',
    type: 'politics',
    body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
    title:
      'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.',
    active: true,
  },
  {
    id: 3,
    author: 'John D. Benson',
    type: 'politics',
    body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
    title:
      'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.',
    active: true,
  },
  {
    id: 4,
    author: 'John D. Benson',
    type: 'education',
    body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
    title:
      'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.',
    active: false,
  },
  {
    id: 5,
    author: 'John D. Benson',
    type: 'news',
    body: 'Sit minim deserunt enim enim nisi. Eiusmod incididunt dolore et ea anim. Non exercitation id voluptate et velit quis anim officia fugiat esse laborum nisi fugiat non.',
    title:
      'Dolor velit sint tempor culpa cupidatat ipsum do ad tempor eiusmod.',
    active: false,
  },
];

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor() {}

  /*async getPosts() {
    return await (await fetch('../../assets/db.json')).json();*/

  getPosts() {
    return posts;
  }

  getPost(id: number) {
    let singlePost: PostStructure | undefined = posts.find(
      (post) => post.id == id
    );
    return singlePost;
  }

  alterActive(i: number): void {
    posts.forEach((post) => {
      if (post.id == i) {
        post.active = !post.active;
      }
    });
  }
}
