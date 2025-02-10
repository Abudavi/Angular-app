import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponenteComponent } from "./nuevo-componente/nuevo-componente.component";
import { ComponenteInlineComponent } from "./componente-inline/componente-inline.component";
import { ComponenteInterpolacionComponent } from "./componente-interpolacion/componente-interpolacion.component";
import { PadreComponent } from "./padre/padre.component";
import { HijoComponent } from './hijo/hijo.component';
import { MostrarMensajeComponent } from "./mostrar-mensaje/mostrar-mensaje.component";
import { ReplicadorComponent } from "./replicador/replicador.component";
import { SaludoComponent } from "./saludo/saludo.component";

@Component({
  selector: 'app-root',
  imports: [ SaludoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola Mundo Angular';
}
