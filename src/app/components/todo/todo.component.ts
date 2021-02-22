import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  items =  ['tarefa 1', 'tarefa 2']

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(todo: string) {
    console.log(todo);
    this.items.push(todo);
    console.log(this.items);
  }

  removeTodo(event) {
    console.log('O ELEMENTO PAI RECEBEU -', event);
    let indice = this.items.indexOf(event);
    this.items.splice(indice, 1);
  }

}
