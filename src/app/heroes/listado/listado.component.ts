import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  
  
  heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor', 'Cápitan América'];

  heroeBorrado: string = '';

  borrarHeroe(){
    console.log('borrando...');

    this.heroeBorrado = this.heroes.shift();

    console.log(this.heroeBorrado);
  }
}
