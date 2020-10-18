import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userList: Array<User>

  constructor() {
    this.userList = new Array<User>();
    this.generateUserList();
    console.log(this.userList);

  }

  generateUserList(): void {
    let user: User = new User();
    user.userName = 'jonsnow';
    user.firstName = 'Jon';
    user.lastName = 'Snow';
    user.password = 'khaleesi';
    user.isAdmin = true;
    this.userList.push(user);

    user = new User();
    user.userName = 'saymyname';
    user.firstName = 'Walter';
    user.lastName = 'White';
    user.password = 'heisenberg';
    user.isAdmin = true;
    this.userList.push(user);

    user = new User();
    user.userName = 'thatsmyspot';
    user.firstName = 'Sheldon';
    user.lastName = 'Cooper';
    user.password = 'dramyfowler';
    user.isAdmin = false;
    this.userList.push(user);

    user = new User();
    user.userName = 'coolcoolcool';
    user.firstName = 'Jake';
    user.lastName = 'Peralta';
    user.password = 'b99';
    user.isAdmin = false;
    this.userList.push(user);
  }

  addUser(user: User): void {
    this.userList.push(user);
    console.log(this.userList);
  }

  getUser(userName: string): User {
    let user: User = new User();
    this.userList.forEach(u => {
      if (u.userName == userName)
        user = u;
    });
    return user;
  }
}
