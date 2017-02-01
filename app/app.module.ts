import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { HeaderComponent } from './header.component';
import { NavComponent } from './nav.component';
import { GalleryComponent } from './gallery.component';
import { SelectedImageComponent } from './selected-image.component';
import { LocationComponent } from './location.component';

// import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    BrowserModule
    //, AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyA03hvhiLKIjryU6e_WpDCBvH0vrzrPe-I'
    // })
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    GalleryComponent,
    SelectedImageComponent,
    LocationComponent
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
