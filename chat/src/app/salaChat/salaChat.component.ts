import { Component, Input, OnInit } from '@angular/core';
import { EntradaUsuarioComponent } from '../entradaUsuario/entradaUsuario.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-salaChat',
  standalone: true,
  imports:[EntradaUsuarioComponent, CommonModule],
  templateUrl: './salaChat.component.html',
  styleUrls: ['./salaChat.component.css']
})
export class SalaChatComponent {

  listaMensajes: string[] = [];

  agregarMensaje(mensaje: string) {
    this.listaMensajes.push(mensaje);
  }

}
