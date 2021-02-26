import { Component, OnInit } from '@angular/core';
import * as socket from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  socketEndpoint = 'localhost:3300';
  socket;
  nome: string;
  message: string;

  constructor() { }

  ngOnInit(): void {
    this.setupSocketConnection();
    this.nome = prompt('Digite o nome do usuario');
  }

  setupSocketConnection() {
    this.socket = socket.io(this.socketEndpoint);
    this.socket.on('new msg', (data: string) => {
        this.renderMessage(data);
    })

  }

  SendMessage() {
    this.socket.emit('send msg', `${this.nome}: ${this.message}`);
    this.renderMessage(`${this.nome}: ${this.message}`);
  }

  renderMessage(message: any) {
    const element = document.createElement('li');
    element.innerHTML = message;
    element.style.background = 'white';
    element.style.padding = '15px 30px';
    element.style.margin = '10px';
    element.style.textAlign = 'right';
    document.getElementById('message-list').appendChild(element);
    this.message = '';
  }
}
