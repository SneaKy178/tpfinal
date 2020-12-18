import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './application/navbar/navbar.component';
import { FooterComponent } from './application/footer/footer.component';
import { Error404Component } from './application/error404/error404.component';
import { HomeComponent } from './application/home/home.component'
import { TutorielComponent } from './application/tutoriel/tutoriel.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component';
import { ReadComponent } from './application/crud/read/read.component';
import { UpdateComponent } from './application/crud/update/update.component';
import { ContactComponent } from './application/contact/contact.component';
import { AfficherComponent } from './application/crud/afficher/afficher.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    Error404Component,
    HomeComponent,
    TutorielComponent,
    FormulaireComponent,
    ReadComponent,
    UpdateComponent,
    ContactComponent,
    AfficherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
