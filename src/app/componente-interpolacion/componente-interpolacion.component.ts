import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-interpolacion',
  imports: [],
  template: `
    <section>
      <div class="container">
        <h1 class="text-center text-warning">{{titulo}}</h1>
        <p>Bienvenido! {{Usuario.nombre}}.</p>
        <p>Tienes {{Usuario.edad}} años.</p>
        <p>{{saludar()}}</p>
        <p>En un año tendras {{Usuario.edad + 1}}</p>
      </div>
    </section>
  `,
  styles: ``
})
export class ComponenteInterpolacionComponent {
titulo="Universidad angular";
Usuario = {
 nombre: "Juan",
 edad: 25
};
saludar(){
  return  ` Hola usuario ${this.Usuario} `;
}
}
