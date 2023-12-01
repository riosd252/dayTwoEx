import { Injectable } from '@angular/core';
import { UsersStructure } from '../interfaces/users-structure';

const users: UsersStructure[] = [
  { id: 1, name: 'Carlo', email: 'carlo@carlo.carl', position: 'user' },
  { id: 2, name: 'Luca', email: 'luca@luca.lu', position: 'user' },
  { id: 3, name: 'Costco', email: 'costco@costco.co', position: 'user' },
];

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}
  getUsers() {
    return users;
  }

  getUser(id: number) {
    let user = users.find((user) => user.id == id);
    return user;
  }
}
