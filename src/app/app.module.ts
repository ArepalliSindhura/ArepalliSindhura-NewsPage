import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltersBarComponent } from './filters-bar/filters-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsLinesComponent } from './news-lines/news-lines.component';
import { SourcenameBarComponent } from './sourcename-bar/sourcename-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltersBarComponent,
    FooterComponent,
    NavbarComponent,
    NewsLinesComponent,
    SourcenameBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
