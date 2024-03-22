import { Component } from '@angular/core';
import { Interface } from '../../models/interface';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrls: ['./ford.component.scss'],
})
export class FordComponent {
  fiatCars: Interface[] = [];

  ngOnInit(): void {
    fetch('../../../assets/db.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Errore durante il caricamento del file JSON');
        }
        return response.json();
      })
      .then((data) => {
        this.fiatCars = data.Modules.filter((car: any) => car.brand === 'Ford');
      })
      .catch((error) => {
        console.error('Errore durante il recupero dei dati:', error);
      });
  }
}
