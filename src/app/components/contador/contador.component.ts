import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  count = 0;
  text: string;

  pessoas = [
    {
      nome: "Ivonaldo",
      sobrenome: "Soares"
    }
  ]

  constructor() { }

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10) {
        clearInterval(interval);
      }
    }, 1000)
  }

  public clicou():void {
    console.log("clicou em min");
  }

}
