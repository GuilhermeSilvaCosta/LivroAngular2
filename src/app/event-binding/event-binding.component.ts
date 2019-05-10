import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  meuClick() {
    console.log('evento meuClick do botão');
  }

  digitou($event) {
    console.log($event);
  }

  digitouVarTemplate(valor) {
    console.log(valor);
  }
}
