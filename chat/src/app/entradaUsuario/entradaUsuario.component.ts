import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-entradaUsuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './entradaUsuario.component.html',
  styleUrls: ['./entradaUsuario.component.css']
})
export class EntradaUsuarioComponent  {
  @Output() emitir = new EventEmitter<string>();
  @Input() usuario: string = '';

  mensaje: string = '';

  enviarMensaje() {
    debugger
    this.emitir.emit(this.mensaje);
    this.mensaje = '';
  }

}
