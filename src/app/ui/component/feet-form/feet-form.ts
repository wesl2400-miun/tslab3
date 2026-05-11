import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Feet } from '../../../logic/service/feet';
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
  private feet: Feet;
 
  constructor(feet: Feet, 
    fBuilder: FormBuilder) {
    this.fBuilder = fBuilder;
    this.subs = new Subscription();
    this.feet = feet;
    this.form = this.fBuilder
      .group({
      meter: [{ value: 0, 
        disabled: false }],
      feet:  [{ value: 0, 
        disabled: true }]
    });
  }

  // Lägg till händelser till'subscriptions'
  // så att de kan observeras för ändringar
  public ngOnInit() {
    this.subs.add(this.observeMeter());
    this.subs.add(this.observeFeet());
  }

  // Sluta observera de olika händelser för att undvika 'memory-leaks'
  // Om detta inte görs, kommer observeCels och observeFharen fortsätta
  // köra i bakgrunden
  public ngOnDestroy() {
    this.subs.unsubscribe();
  }

  // Meter inmatning observeras här
  // Nytt värde kommer omvandlas till Fot-enheten
  observeMeter = (): Subscription => {
    return this.form.get('meter')!
      .valueChanges
      .subscribe(value => {
        if(typeof value !== 'number')
          return;
        this.feet.update(value);
      });
  }

  // Textfältet för Fot-enheten observeras här och kommer uppdateras 
  // när fot-värdet uppdateras via serviceklassen Feet
  observeFeet = (): Subscription => {
    return this.feet.value$
      .subscribe(value => {
      this.form.get('feet')!
        .setValue(value, { 
          emitEvent: false});
    });
  }
}
