import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LetsimagineComponent } from './components/letsimagine/letsimagine.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CareerpathModule } from './careerpath/careerpath.module';

@NgModule({
  declarations: [AppComponent, LetsimagineComponent, WelcomeComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, CareerpathModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }
