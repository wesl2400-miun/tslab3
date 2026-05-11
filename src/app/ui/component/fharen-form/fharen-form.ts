import { Component } from '@angular/core';
import { Fharenheit } from '../../../logic/service/fharenheit';
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
  private result: Fharenheit;

  constructor(
    fharenheit: Fharenheit,
    fBuilder: FormBuilder) {
    this.fBuilder = fBuilder;
    this.subs = new Subscription();
    this.result = fharenheit;
    this.form = this.fBuilder
      .group({
      celsius: [{ value: 0, 
        disabled: false }],
      fharen: [{value: 0, 
        disabled: true}]
    });
  }

  // Lägg till händelser till'subscriptions'
  // så att de kan observeras för ändringar
  public ngOnInit() {
    this.subs.add(this.observeCels());
    this.subs.add(this.observeFharen());
  }

  // Sluta observera de olika händelser för att undvika 'memory-leaks'
  // Om detta inte görs, kommer observeCels och observeFharen fortsätta
  // köra i bakgrunden
  public ngOnDestroy() {
    this.subs.unsubscribe();
  }

  // Celsius inmatning observeras här
  // Nytt värde kommer omvandlas till Fharenheit
  observeCels = (): Subscription => {
    return this.form.get('celsius')!
      .valueChanges
      .subscribe(value => {
      if(typeof value !== 'number')
        return;
      this.result.updateFhar(value);
    });
  }

  // Fharenheit inmatning observeras här
  // Fharenheit inmatningsfält kommer uppdateras
  // när fharenheit värdet uppdateras via serviceklassen Fharenheit
  observeFharen = (): Subscription => {
    return this.result.value$.subscribe(
      value => {
      this.form.get('fharen')!
        .setValue(value, 
          { emitEvent: false });
    });
  }
}
