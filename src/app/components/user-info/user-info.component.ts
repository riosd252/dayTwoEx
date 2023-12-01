import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersStructure } from 'src/app/interfaces/users-structure';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  user: UsersStructure | undefined;

  constructor(private route: ActivatedRoute, private userSrv: UsersService) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      const id = +param['id'];
      this.user = this.userSrv.getUser(id);
    });
  }
}
