import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CodeSnippetComponent } from './code-snippet/code-snippet.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeSnippetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule, // * dependency by MatIconRegistry
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
