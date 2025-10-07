import { Injectable, signal } from '@angular/core';

type TempUnit = 'C' | 'F' | 'K';
@Injectable({ providedIn: 'root' })
export class UnitService {
  tempUnit = signal<'C' | 'F' | 'K'>('C');

  toggleTemp() {
    const current = this.tempUnit();
    this.tempUnit.set(
      current === 'C' ? 'F' : current === 'F' ? 'K' : 'C'
    );
  }

  convertTemp(value: number): number {
    const unit = this.tempUnit();
    if (unit === 'F') return value * 9 / 5 + 32;
    if (unit === 'K') return value + 273.15;
    return value; // Celsius by default
  }

  // ✅ No language needed
  getTempUnitLabel(): string {
    const unit = this.tempUnit();
    return unit === 'K' ? 'K' : `°${unit}`; // K has no degree symbol
  }
}
