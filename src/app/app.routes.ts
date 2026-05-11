import { Routes } from '@angular/router';
import { About } from './ui/page/about/about';
import { Convert } from './ui/page/convert/convert';
import { Picture } from './ui/page/picture/picture';

// Här definieras rutterna för hela applikationen
export const routes: Routes = [
  { path: '', redirectTo: 'about' },
  { path: 'about', component: About },
  { path: 'convert', component: Convert },
  { path: 'picture', component: Picture  }
];
