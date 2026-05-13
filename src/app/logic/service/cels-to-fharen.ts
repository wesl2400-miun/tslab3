import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

// En service-klass som hanterar Clesius till Fharenheit konverteringen
// och spårar det aktuella värdet för Fharenheit
@Injectable({
  providedIn: 'root',
})
export class CelsToFharen {
  private fharenSbj: BehaviorSubject<number>;
  private celsSbj: BehaviorSubject<number>;
  public fharen$: Observable<number>;
  public cels$: Observable<number>;


  constructor() {
    this.fharenSbj  = 
      new BehaviorSubject(0);
    this.celsSbj =
      new BehaviorSubject(0);
    this.fharen$ = this.fharenSbj
      .asObservable();
    this.cels$ = this.celsSbj
      .asObservable();
  }

  // Uppdatera Fharenheit värdet
  public updateFharen = (
    cels: number) => {
    const fhar: number = 
      this.toFhar(cels);
    this.fharenSbj.next(fhar);
  }

    // Uppdatera Celsius värdet
  public updateCels = (
    fharen: number) => {
    const cels: number = 
      this.toCels(fharen);
    this.celsSbj.next(cels);
  }

  // Konvertera Celsius till Fharenheit
  // och avrunda resultatet till 3 decimaler
  private toFhar = (
    cels: number): number => {
    const result =
      (cels * 1.8) + 32;
    return Number(
      result.toFixed(3));;
  }

  // Konvertera Fharenheit till Celsius
  // och avrunda resultatet till 3 decimaler
  private toCels = (
    fharen: number): number => {
    const result = 
      (fharen - 32) * (5/9);
    return Number(
      result.toFixed(3));
  }
}
