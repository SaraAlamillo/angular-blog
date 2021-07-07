import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private readonly usersService: UsersService) {}

  ngOnInit(): void {
    // this.usersService.getUsers().subscribe(console.log);
  }
}
