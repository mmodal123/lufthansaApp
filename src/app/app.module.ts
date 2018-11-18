import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MaterialModuleModule} from './material-module/material-module.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MaterialModuleModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
