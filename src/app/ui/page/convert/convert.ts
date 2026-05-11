import { Component } from '@angular/core';
import { FharenForm } from '../../component/fharen-form/fharen-form';
import { FeetForm } from '../../component/feet-form/feet-form';

// Denna komponent inkluderar Celsius till Fharenheit-formuläret
// och Meter till Fot-formuläret
// Komponenterna inkluderas i form av en lista via fältnamnet 'imports'
@Component({
  selector: 'app-convert',
  imports: [FharenForm, FeetForm],
  templateUrl: './convert.html',
  styleUrl: './convert.css',
})
export class Convert {

}
