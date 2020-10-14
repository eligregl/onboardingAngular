import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LetsimagineComponent } from './components/letsimagine/letsimagine.component';
import { CareerpathComponent } from './careerpath/careerpath.component';
import { TriforceComponent } from './components/triforce/triforce.component';
import { ValuesComponent } from './components/values/values.component';
import { KeypeopleComponent } from './components/keypeople/keypeople.component';
import { ReadyComponent } from './components/ready/ready.component';
import { StudiosComponent } from './components/studios/studios.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'imagine',
    component: LetsimagineComponent
  },
  {
    path: 'careerpath',
    component: CareerpathComponent
  },
  { 
    path: 'triforce',
    component: TriforceComponent
  },
  {
    path: 'values',
    component: ValuesComponent
  },
  {
    path: 'keypeople',
    component: KeypeopleComponent
  },
  {
    path: 'ready',
    component: ReadyComponent
  },
  {
    path: 'studios',
    component: StudiosComponent
  },

];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
