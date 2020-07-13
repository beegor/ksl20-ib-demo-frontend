import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConsumerAppComponent} from './consumer-app/consumer-app.component';
import {HomeScreenComponent} from './home-screen/home-screen.component';


const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent
  },
  {
    path: 'consumer-app/:id',
    component: ConsumerAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
