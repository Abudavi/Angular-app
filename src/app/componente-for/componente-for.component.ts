import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-for',
  imports: [],
  templateUrl: './componente-for.component.html',
  styleUrl: './componente-for.component.css'
})
export class ComponenteForComponent {
titulo='Directiva for en Angular';
tareas: string[] = ['Tarea 1', 'Tarea 2dd', 'Tarea 3', 'Tarea 4', 'Tarea 5'];

agregarTarea(tarea: string): void{
  if(tarea){
    this.tareas.push(tarea);
  }
}
}