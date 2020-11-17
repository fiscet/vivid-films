import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FilmListComponent } from './films/film-list';
import { FilmDetailComponent } from './films/film-detail';
import { PageNotFoundComponent } from './page-not-found';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';

import { GlobalsService } from './common/services/globals.service';
import { ApiService as FilmApiService } from './films/services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [GlobalsService, FilmApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
