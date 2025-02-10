import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-inline',
  imports: [],
  template: `
  <div class="container">
  <h2 class="text-center">{{tituloComponente}}</h2>
  </div>

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
