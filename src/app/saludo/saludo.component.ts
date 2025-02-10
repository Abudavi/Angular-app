import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-saludo',
  imports: [FormsModule],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {
  titulo = 'Two way  binding';
 saludo = 'Hola Mundo';
}
