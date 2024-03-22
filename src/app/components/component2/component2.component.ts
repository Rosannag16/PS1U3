import { Component } from '@angular/core';
import { Interface } from '../../models/interface';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.scss'],
})
export class Component2Component {
  interface: Interface[] = [];
  logos: string[] = [];

  constructor() {
    this.getModules()
      .then((data: any) => {
        if (data) {
          this.logos.push(data[0].brandLogo);
          this.logos.push(data[2].brandLogo);
          this.logos.push(data[4].brandLogo);
          console.log(this.logos);
        } else {
          console.error('Dati non validi nel file JSON.');
        }
      })
      .catch((error) => {
        console.error('Errore durante il recupero dei dati:', error);
      });
  }

  async getModules() {
    let response = await fetch('../../../assets/db.json');
    let data = await response.json();
    console.log(data);
    return data.Modules;
  }
}
