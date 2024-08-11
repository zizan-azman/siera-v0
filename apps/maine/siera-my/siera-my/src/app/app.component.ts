import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SieraMyShellComponent } from '@siera/siera-my-shell';

@Component({
  standalone: true,
  imports: [RouterOutlet, SieraMyShellComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'siera-my';
}
