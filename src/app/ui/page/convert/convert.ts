import { Component } from '@angular/core';
import { FharenForm } from '../../component/fharen-form/fharen-form';

// Denna komponent inkluderar Celsius till Fharenheit-formuläret
// och Meter till Fot-formuläret
@Component({
  selector: 'app-convert',
  imports: [FharenForm],
  templateUrl: './convert.html',
  styleUrl: './convert.css',
})
export class Convert {

}
