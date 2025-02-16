import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  imports: [],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {
titulo="@ViewChild en Angular";
@ViewChild('referenciaInput') inputElemento!:ElementRef;

cambiarTexto(){
  this.inputElemento.nativeElement.value="Texto Cambiado";
}
}
