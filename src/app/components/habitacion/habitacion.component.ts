import { Component, output } from '@angular/core';
import { PersianaComponent } from './persiana/persiana.component';

@Component({
  selector: 'app-habitacion',
  imports: [PersianaComponent],
  templateUrl: './habitacion.component.html',
  styleUrl: './habitacion.component.css'
})
export class HabitacionComponent {

  habitacionOutput = output<boolean>();

onAbierta(abierta: boolean) {
      this.habitacionOutput.emit(abierta);
}

}
