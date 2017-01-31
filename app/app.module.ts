import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HeaderComponent } from './header.component';
import { NavComponent } from './nav.component';
import { GalleryComponent } from './gallery.component';
import { SelectedImageComponent } from './selected-image.component';


@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    GalleryComponent,
    SelectedImageComponent
   ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
