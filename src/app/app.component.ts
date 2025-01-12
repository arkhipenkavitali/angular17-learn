import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ReactiveFormsComponent} from "./reactive-forms/reactive-forms.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular17-start';
}
