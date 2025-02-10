import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {

  private titulo='Ttitulo componente hijo';

  //typescript
  get mostrarTitulo(){
    return this.titulo;
  }
  //javascript
  getTitulo(){
    return this.titulo;
  }
}
