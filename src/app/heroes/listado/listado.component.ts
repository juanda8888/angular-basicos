import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['spiderman', 'ironman', 'hulk', 'goku']

  heroesBorrados: string[] = []


  borrarHeroe(): void {
    const heroeDeleted: string = this.heroes.pop() || ''
    this.heroesBorrados.push(heroeDeleted)

    console.log(this.heroesBorrados)
  }

}
