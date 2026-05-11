import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// En service-klass som hanterar Meter till Fot konverteringen
// och spårar det aktuella värdet för Fot-enheten
@Injectable({
  providedIn: 'root',
})
export class Feet {
  private subj: BehaviorSubject<number>;
  public value$: Observable<number>;

  constructor() {
    this.subj = 
      new BehaviorSubject(0);
    this.value$ = this.subj
      .asObservable();
  }

  // Uppdatera värdet för Fot-enheten
  public update = (
    meter: number) => {
    const feet = 
      this.toFeet(meter);
    this.subj.next(feet);
  }

  // Konvertera meter till fot
  private toFeet = (
    meter: number): number => {
    return meter * 3.2808399;
  }
}
