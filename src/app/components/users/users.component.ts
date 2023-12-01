import { Component, OnInit } from '@angular/core';
import { UsersStructure } from 'src/app/interfaces/users-structure';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: UsersStructure[] = [];

  constructor(private userSrv: UsersService) {}

  ngOnInit(): void {
    this.users = this.userSrv.getUsers();
  }

  getUser(id: number): void {
    this.userSrv.getUser(id);
  }
}
