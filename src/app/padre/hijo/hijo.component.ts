import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
 
@Output() notificarPadre = new EventEmitter<string>();
mensaje:string="Mensaje desde el componente hijo";

cambiarMensaje(nuevoMensaje:string){
this.mensaje=nuevoMensaje;
}

}
