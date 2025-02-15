import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
 
@Output() notificarPadre = new EventEmitter<string>();

enviarMensaje(){
  this.notificarPadre.emit('hola desde el componente hijo')
}
}
