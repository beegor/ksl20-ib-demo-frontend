import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ConsumerAppComponent} from './consumer-app/consumer-app.component';
import {AppRoutingModule} from './app-routing.module';

import {ChartsModule} from 'ng2-charts';
import {SidebarComponent} from './sidebar/sidebar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeScreenComponent} from './home-screen/home-screen.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConsumerAppComponent,
    SidebarComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
