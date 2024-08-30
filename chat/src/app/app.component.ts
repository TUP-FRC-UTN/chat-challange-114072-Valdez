import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SalaChatComponent } from './salaChat/salaChat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SalaChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chat';
}
