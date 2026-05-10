import { Routes } from '@angular/router';
import { About } from './ui/component/about/about';
import { Convert } from './ui/component/convert/convert';
import { Picture } from './ui/component/picture/picture';

export const routes: Routes = [
  { path: '', component: About },
  { path: 'about', redirectTo: '', component: About, pathMatch: 'full' },
  { path: 'convert', component: Convert, pathMatch: 'full' },
  { path: 'picture', component: Picture, pathMatch: 'full' }
];
