import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// En service-klass som hanterar Meter till Fot konverteringen
// och spårar det aktuella värdet för Fot-enheten
@Injectable({
  providedIn: 'root',
})
export class MeterToFeet {
  private meterSbj: BehaviorSubject<number>;
  public meter$: Observable<number>;
  private feetSbj: BehaviorSubject<number>;
  public feet$: Observable<number>;

  constructor() {
    this.meterSbj = 
      new BehaviorSubject(0);
    this.meter$ = this.meterSbj
      .asObservable();
    this.feetSbj = 
      new BehaviorSubject(0);
    this.feet$ = this.feetSbj
      .asObservable();
  }

  // Uppdatera värdet för Fot-enheten
  public updateFeet = (
    meter: number) => {
    const feet = 
      this.toFeet(meter);
    this.feetSbj.next(feet);
  }

  // Uppdatera värdet för Meter-enheten
  public updateMeter = (
    feet: number) => {
    const meter = 
      this.toMeter(feet);
    this.meterSbj.next(meter);
  }

  // Konvertera fot till meter
  // och avrunda resultatet till 3 decimaler
  private toMeter = (
    feet: number): number => {
    const result =
       feet * 0.3048;
    return Number(
      result.toFixed(3));
  }

  // Konvertera meter till fot
  // och avrunda resultatet till 3 decimaler
  private toFeet = (
    meter: number): number => {
    const result =
      meter * 3.2808399;
    return Number(
      result.toFixed(3));
  }
}
