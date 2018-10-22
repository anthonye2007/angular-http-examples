import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class Todo {
  title: string;
}

class Post {
  id: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient) {}
  title = 'sample-post';
  todos = null;
  created = new Post();

  makeGet() {
    console.log('in GET');
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    this.http.get<Todo>(url).subscribe(data => this.todos = data.title);
  }

  makePost() {
    console.log('in POST');
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const body = {};
    this.http.post<Post>(url, body).subscribe(data => this.created = data);
  }
}
