import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnowService } from './snow.service';

@Component({
  selector: 'app-snow',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="snow-container">
      @for (snowflake of snowService.getSnowflakes(); track snowflake.id) {
        <div 
          class="snowflake"
          [style.left.%]="snowflake.x"
          [style.top.%]="snowflake.y"
          [style.width.px]="snowflake.size"
          [style.height.px]="snowflake.size"
          [style.opacity]="snowflake.opacity">
        </div>
      }
    </div>
  `,
  styles: [
    `
    .snow-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1000;
    }

    .snowflake {
      position: absolute;
      background-color: white;
      border-radius: 50%;
      pointer-events: none;
      filter: blur(1px);
    }
  `,
  ],
})
export class SnowComponent {
  constructor(public snowService: SnowService) {}
}
