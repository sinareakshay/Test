import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersArray: any[] = []
  constructor(
    private testServices: TestService
  ) { }

  ngOnInit() {
    this.testServices.getUsers().subscribe(res => {
      console.log(res);
      this.usersArray =res.slice(0, 20);
    })
  }

}
