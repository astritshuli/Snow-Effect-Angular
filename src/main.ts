import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { SnowComponent } from './app/snow/snow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SnowComponent],
  template: `
    <app-snow />
    <div class="content">
      <h1>Hello from {{ name }}!</h1>
      <a target="_blank" href="https://angular.dev/overview">
        Learn more about Angular
      </a>
    </div>
  `,
  styles: [`
    .content {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: linear-gradient(to bottom, #1a1a1a, #4a4a4a);
      color: white;
      text-align: center;
      position: relative;
      z-index: 1;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    a {
      color: #61dafb;
      text-decoration: none;
      font-size: 1.2rem;
    }

    a:hover {
      text-decoration: underline;
    }
  `]
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);