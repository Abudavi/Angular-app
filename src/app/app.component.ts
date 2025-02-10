import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from "./nuevo-componente/nuevo-componente.component";
import { ComponenteInlineComponent } from "./componente-inline/componente-inline.component";
import { ComponenteInterpolacionComponent } from "./componente-interpolacion/componente-interpolacion.component";
import { PadreComponent } from "./padre/padre.component";
import { HijoComponent } from './padre/hijo/hijo.component';

@Component({
  selector: 'app-root',
  imports: [ ComponenteInlineComponent, ComponenteInterpolacionComponent, PadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola Mundo Angular';
}
