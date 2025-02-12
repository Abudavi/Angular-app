import { Component } from '@angular/core';

@Component({
  selector: 'app-component-if',
  imports: [],
  templateUrl: './component-if.component.html',
  styleUrl: './component-if.component.css'
})
export class ComponentIfComponent {
  titulo = " Directiva if en Angular";
  autentificador: boolean = false;

  invertirAutentificador(): void {

    this.autentificador = !this.autentificador;
  }
}
