import { Routes } from '@angular/router';
import { About } from './ui/page/about/about';
import { Convert } from './ui/page/convert/convert';
import { Picture } from './ui/page/picture/picture';

// Här definieras rutterna för hela applikationen
// Matcha rutterna efter fullständiga sökvägar
export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full'},
  { path: 'about', component: About, pathMatch: 'full' },
  { path: 'convert', component: Convert, pathMatch: 'full'  },
  { path: 'picture', component: Picture, pathMatch: 'full'  }
];
