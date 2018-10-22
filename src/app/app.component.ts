import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class Todo {
  title: string;
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

  makeGet() {
    console.log('here');
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    this.http.get<Todo>(url).subscribe(data => this.todos = data.title);
  }
}
