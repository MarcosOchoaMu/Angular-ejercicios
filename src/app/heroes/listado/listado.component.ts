import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Batman','Hulk','Capitan America','Goku','Chapulin Colorado']
  heroeborrado: string = '';

  borrarheroe(){
    this.heroeborrado = this.heroes.shift()||'';

  }
}
