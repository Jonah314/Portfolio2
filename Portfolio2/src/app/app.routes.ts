import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Bootcamp } from './pages/bootcamp/bootcamp';
import { Projects } from './pages/projects/projects';
import { Masters } from './pages/masters/masters';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'bootcamp', component: Bootcamp },
  { path: 'projects', component: Projects },
  { path: 'masters', component: Masters },
];