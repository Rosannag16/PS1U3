import { Component } from '@angular/core';
import { Interface } from '../../models/interface';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.scss'],
})
export class Component3Component {
  modules: Interface[] = [];
  module1: any = {};
  module2: any = {};

  constructor() {}

  ngOnInit(): void {
    fetch('../../../assets/db.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Errore durante il caricamento del file JSON');
        }
        return response.json();
      })
      .then((data) => {
        this.modules = data.Modules;

        const randomIndex1 = Math.floor(Math.random() * this.modules.length);
        this.module1 = this.modules[randomIndex1];

        let randomIndex2 = Math.floor(Math.random() * this.modules.length);
        while (randomIndex2 === randomIndex1) {
          randomIndex2 = Math.floor(Math.random() * this.modules.length);
        }
        this.module2 = this.modules[randomIndex2];
      })
      .catch((error) => {
        console.error('Errore durante il recupero dei dati:', error);
      });
  }
}
