import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerspaceComponent } from './bannerspace/bannerspace.component';
// <<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';


// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// >>>>>>> insurance

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BannerspaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
// <<<<<<< HEAD
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule

    // BrowserAnimationsModule
// >>>>>>> insurance
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
