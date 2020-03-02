import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConsumerAppComponent} from './consumer-app/consumer-app.component';
import {ConsumerAppListComponent} from './consumer-app-list/consumer-app-list.component';


const routes: Routes = [
  {
    path: '',
    component: ConsumerAppListComponent
  },
  {
    path: 'consumer-app/:impl',
    component: ConsumerAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
