import { Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>
        <h3>La base es: <strong> {{ base }}</strong></h3>

        <button (click)="acumular('suma')"> +5 </button>
        <span>{{ numero }}</span>
        <button (click)="acumular('resta')"> -5 </button>
    `
})

export class ContadorComponent {
    titulo: string = 'Contador app';
    numero: number = 10;
    // base: number = 5
    base: number = 5;
    acumular( valor: string): void {
      if (valor === 'suma') {
        this.numero += this.base;
      } else {
        this.numero -= this.base;
      }
    }

}