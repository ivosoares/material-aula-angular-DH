import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() data: Todo;
  @Output() remove = new EventEmitter();
  done = false;

  constructor() { }

  ngOnInit(): void {
  }

  removeTodo() {
    this.remove.emit(this.data);
  }

  markAsDone() {
    this.done = true;
  }
}
