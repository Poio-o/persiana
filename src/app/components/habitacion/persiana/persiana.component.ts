import { Component, output } from '@angular/core';

@Component({
  selector: 'app-persiana',
  imports: [],
  templateUrl: './persiana.component.html',
  styleUrl: './persiana.component.css'
})
export class PersianaComponent {

  abierta = false;

  abiertaOutput = output<boolean>()

  onSubirBajar(event: Event) {
    let subBaj = event.target as HTMLButtonElement

    this.abierta = !this.abierta;
    subBaj.innerText = this.abierta ? "Bajar" : "Subir";
    this.abiertaOutput.emit(this.abierta);
  }
}
