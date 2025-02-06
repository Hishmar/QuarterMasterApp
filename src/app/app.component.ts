import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BasePageComponent } from './base-page/base-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BasePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'QuarterMasterApp';
}
