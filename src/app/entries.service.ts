import { Injectable } from '@angular/core';
import { Post } from './interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class EntriesService {
  private savedPosts: Post[];

  constructor() {
    this.savedPosts = [
      {
        id: 1,
        title: '¿Viaje al desierto?',
        text: 'Prepárate para el viaje que te cambiará la vida. Aquí te contamos todo lo que necesitas saber para aprovechar la experiencia al máximo. ¿A qué esperas?',
        author: 'Ainho',
        image:
          'https://images.unsplash.com/photo-1604713434799-deb510544ea7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        date: Date.now(),
        category: 'TRAVEL',
      },
      {
        id: 2,
        title: 'Desayuno: poco y bien o mucho y mejor',
        text: 'Si te gusta empezar el día con algo más que café, estás en el sitio correcto. Hoy te cuento cómo es mi rutina de desayunos, con algunos tips y recomendaciones. ',
        author: 'Sito',
        image:
          'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        date: Date.now(),
        category: 'FOOD',
      },
      {
        id: 3,
        title: 'Si decides disfrazar a tu perro, ¡entra!',
        text: 'Nos habéis preguntado via Twitter por las ventajas y desventajas de disfrazar a vuestras mascotas. Hemos elaborado un decálogo para que podáis decidir con argumentos. ',
        author: 'Ari',
        image:
          'https://images.unsplash.com/photo-1607505234494-b4f46b9482a3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZHJlc3NlZCUyMGRvZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        date: Date.now(),
        category: 'ANIMALS',
      },
    ];
    // window.localStorage.setItem('posts', JSON.stringify(this.savedPosts));
  }

  addPost(post: Post): void {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    if (posts && Array.isArray(posts)) {
      let newPosts = [...posts];
      let id = newPosts[newPosts.length - 1].id + 1;
      post.id = id;
      newPosts.push(post);
      window.localStorage.setItem('posts', JSON.stringify(newPosts));
    }
  }

  getAllPosts(): Post[] {
    return (JSON.parse(localStorage.getItem('posts')) as Post[]) || [];
  }

  getPostsByCategory(category: string): Post[] {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    return posts.filter((post) => category === post.category);
  }
}
