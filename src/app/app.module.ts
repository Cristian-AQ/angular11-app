import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PadreComponentComponent } from './padre-component/padre-component.component';
import { HijoComponentComponent } from './hijo-component/hijo-component.component';
import { TestModule } from './test/test.module';

@NgModule({
  declarations: [
    AppComponent,
    PadreComponentComponent,
    HijoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
