import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  constructor(private readonly postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(console.log);
  }
}
