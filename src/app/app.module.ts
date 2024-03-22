import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Assicurati di avere questa importazione

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { Component3Component } from './components/component3/component3.component';
import { FooterComponent } from './components/footer/footer.component';
import { FiatComponent } from './components/fiat/fiat.component';
import { AudiComponent } from './components/audi/audi.component';
import { FordComponent } from './components/ford/ford.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'component1', component: Component1Component },
  { path: 'component2', component: Component2Component },
  { path: 'component3', component: Component3Component },
  { path: 'fiat', component: FiatComponent },
  { path: 'audi', component: AudiComponent },
  { path: 'ford', component: FordComponent },

  // Aggiungi  route
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    FooterComponent,
    FiatComponent,
    AudiComponent,
    FordComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)], // Assicurati che RouterModule sia importato qui
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
