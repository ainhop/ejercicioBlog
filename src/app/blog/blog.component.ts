import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../entries.service';
import { Post } from '../interfaces/post.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [EntriesService],
})
export class BlogComponent implements OnInit {
  posts: Post[] = [];
  categories: string[] = ['TRAVEL', 'FOOD', 'ANIMALS'];

  constructor(private entriesServices: EntriesService) {}

  ngOnInit(): void {
    this.posts = this.entriesServices.getAllPosts();
  }

  onChange(option) {
    if (option === 'null') {
      this.posts = this.entriesServices.getAllPosts();
      return;
    }
    this.posts = this.entriesServices.getPostsByCategory(option);
  }
}
