import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HabitacionComponent } from './components/habitacion/habitacion.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HabitacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = 'CONTROL DE VIVIENDA';
  corrienteVivienda = false;
  corrienteHab = false;

  onConectarDesconectar(event: Event) {

    let conDes = event.target as HTMLButtonElement

    this.corrienteVivienda = !this.corrienteVivienda;
    conDes.innerText = this.corrienteVivienda ? "Desconectar" : "Conectar";

  }

    onConectarDesconectarHab(event: Event) {

    let conDes = event.target as HTMLButtonElement

    this.corrienteHab = !this.corrienteHab;
    conDes.innerText = this.corrienteHab ? "Desconectar" : "Conectar";

  }
}
