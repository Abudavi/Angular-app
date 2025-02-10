import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-inline',
  imports: [],
  template: `
    <h2>{{tituloComponente}}</h2>
    <p>
      Fuente mas grande
    </p>
  `,
  styles: `
  h2{
    color: blue;  
  }
  p{
    font-size: 2rem;
  }
  `
})
export class ComponenteInlineComponent {
tituloComponente = 'Componente en linea';
}
