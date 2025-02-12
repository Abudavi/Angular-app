import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar-tarea',
  imports: [],
  templateUrl: './agregar-tarea.component.html',
  styleUrl: './agregar-tarea.component.css'
})
export class AgregarTareaComponent {
titulo= 'Locale Reference en Angular';
tarea:string='';
agregarTarea(tarea:string):void{
this.tarea=tarea;
}
}
