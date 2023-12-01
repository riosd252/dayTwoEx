import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostStructure } from 'src/app/interfaces/post-structure';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  post: PostStructure | undefined;

  constructor(private route: ActivatedRoute, private postSrv: PostsService) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      const id = +param['id'];
      this.post = this.postSrv.getPost(id);
    });
  }
}
