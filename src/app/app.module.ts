import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatCardModule, MatButtonModule } from '@angular/material';

import { AppComponent } from './app.component';


/*=======================================
	import SERVICES
=======================================*/
import { BooksService } from './shared/books.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [
    BooksService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
