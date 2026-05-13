import { Component } from '@angular/core';
import { CelsToFharen } from '../../../logic/service/cels-to-fharen';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

// Sköter Celsius till Fharenheit formuläret
@Component({
  selector: 'app-fharen-form',
  imports: [ReactiveFormsModule],
  templateUrl: './fharen-form.html',
  styleUrl: './fharen-form.css',
})
export class FharenForm {
  private fBuilder: FormBuilder;
  public form: FormGroup;
  private subs: Subscription;
  private cToF: CelsToFharen;

  constructor(
    cToF: CelsToFharen,
    fBuilder: FormBuilder) {
    this.fBuilder = fBuilder;
    this.subs = new Subscription();
    this.cToF = cToF;
    this.form = this.fBuilder
      .group({
      celsius: [{ value: 0, 
        disabled: false }],
      fharen: [{value: 0, 
        disabled: false }]
    });
  }

  // Lägg till händelser till'subscriptions'
  // så att de kan observeras för ändringar
  public ngOnInit() {
    this.subs.add(
      this.celsForm());
    this.subs.add(
      this.fharenForm());
    this.subs.add(
      this.fharenVal());
    this.subs.add(
      this.celsVal());
  }

  // Sluta observera de olika händelser för att undvika 'memory-leaks'
  // Om detta inte görs, kommer observeCels och observeFharen fortsätta
  // köra i bakgrunden
  public ngOnDestroy() {
    this.subs.unsubscribe();
  }

  // Celsius inmatning observeras här
  // Nytt värde kommer omvandlas till Fharenheit
  celsForm = (): Subscription => {
    return this.form.get('celsius')!
      .valueChanges
      .subscribe(value => {
      if(typeof value !== 'number')
        return;
      this.cToF.updateFharen(value);
    });
  }

  // Fharenheit inmatning observeras här
  // Nytt värde kommer omvandlas till Celsius
  fharenForm = (): Subscription => {
    return this.form.get('fharen')!
      .valueChanges
      .subscribe(value => {
      if(typeof value !== 'number')
        return;
      this.cToF.updateCels(value);
    });
  }

  // Värdet för Fharenheit observeras här och kommer uppdateras
  // när fharenheit värdet uppdateras via serviceklassen CelsToFharen
  fharenVal = (): Subscription => {
    return this.cToF.fharen$
      .subscribe(value => {
      this.form.get('fharen')!
        .setValue(value, { 
          emitEvent: false});
    });
  }

  // Värdet för Celsius observeras här och kommer uppdateras
  // när Celsius värdet uppdateras via serviceklassen CelsToFharen
  celsVal = (): Subscription => {
    return this.cToF.cels$
      .subscribe(value => {
      this.form.get('celsius')!
        .setValue(value, { 
          emitEvent: false});
    });
  }
}
