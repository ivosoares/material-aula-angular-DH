import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[];

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe( data => {
      this.users = data;
      console.log(this.users);
    })
  }

  deleteUser(id: number) {
    debugger;
    this.usersService.deleteUser(id).subscribe(
      result => {},
      (err) => console.log(err),
      () => {
        this.getUsers();
      }
      );
  }
}
