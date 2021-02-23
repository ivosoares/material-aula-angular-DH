import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  items: Array<Todo> = [];

  constructor() {
    let todos = JSON.parse(localStorage.getItem('todos'));
    if(!todos) {
      this.items = [];
    }else {
      this.items = todos;
    }
  }

  ngOnInit(): void {
  }

  addTodo(title: string) {
    const id = this.items.length + 1;
    this.items.push(new Todo(id, title, false));
    localStorage.setItem('todos', JSON.stringify(this.items));
    console.log(this.items);
  }

  removeTodo(event) {
    console.log('O ELEMENTO PAI RECEBEU -', event);
    let indice = this.items.indexOf(event);
    this.items.splice(indice, 1);
    localStorage.setItem('todos', JSON.stringify(this.items));
  }

}
