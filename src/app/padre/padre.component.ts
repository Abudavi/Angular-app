import { Component, ViewChild } from '@angular/core';
import { HijoComponent } from "./hijo/hijo.component";

@Component({
  selector: 'app-padre',
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
@ViewChild(HijoComponent) componenteHijo!:HijoComponent; 
cambiarMensajeHijo(){
  this.componenteHijo.mensaje="Se cambio el valor del mensaje desde el componente padre";
}
}
