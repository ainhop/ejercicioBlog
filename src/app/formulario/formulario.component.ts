import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../entries.service';
import { Post } from '../interfaces/post.interface';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [EntriesService],
})
export class FormularioComponent implements OnInit {
  categories: string[] = ['TRAVEL', 'FOOD', 'ANIMALS'];
  authors: string[] = ['Ainho', 'Sito', 'Ari'];
  model = new Post(Infinity, '', '', '', '', Date.now(), null);

  constructor(private entriesServices: EntriesService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.entriesServices.addPost(this.model);
    this.model = new Post(Infinity, '', '', '', '', Date.now(), null);
  }
}
