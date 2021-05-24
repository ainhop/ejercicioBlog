import { Component } from '@angular/core';
import { EntriesService } from './entries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // posts: Post[];
  constructor(private entriesService: EntriesService) {}
}
