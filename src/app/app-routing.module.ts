import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LetsimagineComponent } from './components/letsimagine/letsimagine.component';
import { CareerpathComponent } from './careerpath/careerpath.component';
import { TriforceComponent } from './components/triforce/triforce.component';

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
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
