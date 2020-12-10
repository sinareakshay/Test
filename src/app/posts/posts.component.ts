import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postsArray: any[] = [];
  constructor(
    private testService: TestService
  ) { }

  ngOnInit() {
    this.testService.getPosts().subscribe(res => {
      console.log(res);
      this.postsArray = res.slice(0, 20);
    });
  }

}
