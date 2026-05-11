import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// En service-klass som hanterar Clesius till Fharenheit konverteringen
// och spårar det aktuella värdet för Fharenheit
@Injectable({
  providedIn: 'root',
})
export class Fharenheit {
  private subject: BehaviorSubject<number>;
  public value$: Observable<number>;

  constructor() {
    this.subject = 
      new BehaviorSubject(0);
    this.value$ = this.subject
      .asObservable();
  }

  // Uppdatera Fharenheit värdet
  public updateFhar = (
    cels: number) => {
    const fhar: number = 
      this.toFhar(cels);
    this.subject.next(fhar);
  }

  // Konvertera Celsius till Fharenheit
  private toFhar = (
    cels: number): number => {
    return (cels * 1.8) + 32;
  }
}
