import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LetsimagineComponent } from './components/letsimagine/letsimagine.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CareerpathModule } from './careerpath/careerpath.module';
import { TriforceComponent } from './components/triforce/triforce.component';
import { ValuesComponent } from './components/values/values.component';
import { KeypeopleComponent } from './components/keypeople/keypeople.component';
import { AccordionvaluesComponent } from './components/values/accordionvalues/accordionvalues.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReadyComponent } from './components/ready/ready.component';
import { StudiosComponent } from './components/studios/studios.component';


@NgModule({
  declarations: [AppComponent, LetsimagineComponent, WelcomeComponent, TriforceComponent, ValuesComponent, KeypeopleComponent, AccordionvaluesComponent, ReadyComponent, StudiosComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, CareerpathModule, MatTabsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }
