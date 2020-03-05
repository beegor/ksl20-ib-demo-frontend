import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ConsumerAppComponent} from './consumer-app/consumer-app.component';
import {AppRoutingModule} from './app-routing.module';
import {ConsumerAppListComponent} from './consumer-app-list/consumer-app-list.component';

import {ChartsModule} from 'ng2-charts';
import {SidebarComponent} from './sidebar/sidebar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ConsumerAppComponent,
    ConsumerAppListComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
