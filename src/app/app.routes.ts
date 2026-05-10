import { Routes } from '@angular/router';
import { About } from './ui/component/about/about';
import { Convert } from './ui/component/convert/convert';
import { Picture } from './ui/component/picture/picture';

export const routes: Routes = [
  { path: 'about', component: About },
  { path: 'convert', component: Convert },
  { path: 'picture', component: Picture }
];
