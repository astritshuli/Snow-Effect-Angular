import { Injectable, signal, computed } from '@angular/core';
import { interval } from 'rxjs';

export interface Snowflake {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

@Injectable({
  providedIn: 'root'
})
export class SnowService {
  private readonly maxSnowflakes = 100;
  private snowflakes = signal<Snowflake[]>([]);
  
  public getSnowflakes = computed(() => this.snowflakes());

  constructor() {
    this.initializeSnowflakes();
    this.startSnowfall();
  }

  private initializeSnowflakes(): void {
    const initialSnowflakes = Array.from({ length: this.maxSnowflakes }, (_, i) => this.createSnowflake(i));
    this.snowflakes.set(initialSnowflakes);
  }

  private createSnowflake(id: number): Snowflake {
    return {
      id,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      speed: Math.random() * 1 + 0.5,
      opacity: Math.random() * 0.6 + 0.4
    };
  }

  private startSnowfall(): void {
    interval(50).subscribe(() => {
      this.snowflakes.update(flakes => 
        flakes.map(flake => ({
          ...flake,
          y: flake.y + flake.speed,
          x: flake.x + Math.sin(flake.y / 30) * 0.3,
          ...(flake.y > 100 && { y: -5, x: Math.random() * 100 })
        }))
      );
    });
  }
}