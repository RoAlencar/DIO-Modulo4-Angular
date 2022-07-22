import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  count = 0;
  nome = 'Rodrigo de Alencar Xavier';

  pessoas =[{
    nome: "Ivonaldo",
    sobrenome:"Soares"
  },{
    nome: "Maria",
    sobrenome:"Silva"
  },{
    nome: "João",
    sobrenome:"Pereira"
  },{
    nome: "Marcio",
    sobrenome:"Santos"
  }];

  constructor(){}

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10 ){
        clearInterval(interval);
      }
    }, 1000);
  }
  
    clicou(nome : string) : void {
    console.log('Clicou em mim', nome)
  }


}
