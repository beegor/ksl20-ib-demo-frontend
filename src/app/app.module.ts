import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ConsumerAppComponent} from './consumer-app/consumer-app.component';
import {AppRoutingModule} from './app-routing.module';
import {ConsumerAppListComponent} from './consumer-app-list/consumer-app-list.component';

import {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    ConsumerAppComponent,
    ConsumerAppListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
