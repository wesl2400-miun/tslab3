import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MeterToFeet } from '../../../logic/service/meter-to-feet';
import { Subscription } from 'rxjs';

// Sköter Celsius till Meter till Fot-formuläret
@Component({
  selector: 'app-feet-form',
  imports: [ReactiveFormsModule],
  templateUrl: './feet-form.html',
  styleUrl: './feet-form.css',
})
export class FeetForm {
  private fBuilder: FormBuilder;
  public form: FormGroup;
  private subs: Subscription;
  private mToF: MeterToFeet;
 
  constructor(mToF: MeterToFeet, 
    fBuilder: FormBuilder) {
    this.fBuilder = fBuilder;
    this.subs = new Subscription();
    this.mToF = mToF;
    this.form = this.fBuilder
      .group({
      meter: [{ value: 0, 
        disabled: false }],
      feet:  [{ value: 0, 
        disabled: false }]
    });
  }

  // Lägg till händelser till'subscriptions'
  // så att de kan observeras för ändringar
  public ngOnInit() {
    this.subs.add(
      this.meterForm());
    this.subs.add(
      this.feetForm());
    this.subs.add(
      this.meterVal());
    this.subs.add(
      this.feetVal());
  }

  // Sluta observera de olika händelser för att undvika 'memory-leaks'
  // Om detta inte görs, kommer observeCels och observeFharen fortsätta
  // köra i bakgrunden
  public ngOnDestroy() {
    this.subs.unsubscribe();
  }

  // Meter inmatning observeras här
  // Nytt värde kommer omvandlas till Fot-enheten
  meterForm = (): Subscription => {
    return this.form.get('meter')!
      .valueChanges
      .subscribe(value => {
        if(typeof value !== 'number')
          return;
        this.mToF.updateFeet(value);
      });
  }

  // Fot inmatning observeras här
  // Nytt värde kommer omvandlas till Meter-enheten
  feetForm = (): Subscription => {
    return this.form.get('feet')!
      .valueChanges
      .subscribe(value => {
        if(typeof value !== 'number')
          return;
        this.mToF.updateMeter(value);
      });
  }

  // Värdet för Meter-enheten observeras här och kommer uppdateras 
  // när fot-värdet uppdateras via serviceklassen Feet
  meterVal = (): Subscription => {
    return this.mToF.meter$
      .subscribe(value => {
      this.form.get('meter')!
        .setValue(value, { 
          emitEvent: false});
    });
  }

  // Värdet för Fot-enheten observeras här och kommer uppdateras 
  // när fot-värdet uppdateras via serviceklassen Feet
  feetVal = (): Subscription => {
    return this.mToF.feet$
      .subscribe(value => {
      this.form.get('feet')!
        .setValue(value, { 
          emitEvent: false});
    });
  }
}
