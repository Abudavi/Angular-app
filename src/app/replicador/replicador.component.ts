import { Component } from '@angular/core';

@Component({
  selector: 'app-replicador',
  imports: [],
  templateUrl: './replicador.component.html',
  styleUrl: './replicador.component.css'
})
export class ReplicadorComponent {
  titulo = 'Replicador de texto';
texto='';
actualizarTexto(evento:Event){
const elementoInput = evento.target as HTMLInputElement;
this.texto = elementoInput.value;
}
}
