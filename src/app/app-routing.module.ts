import { ListRentComponent } from './pages/list-rent/list-rent.component';
import { CarRentComponent } from './pages/car-rent/car-rent.component';
import { RentComponent } from './pages/rent/rent.component';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCarRentComponent } from './pages/list-car-rent/list-car-rent.component';

const routes: Routes = [
  {path:'',redirectTo:'/home' , pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'listCarRent', component: ListCarRentComponent },
  { path: 'carRent', component: CarRentComponent },
  { path: 'carRent/:id/:del', component: CarRentComponent },
  { path: 'listRent', component: ListRentComponent },
  { path: 'rent', component: RentComponent },
  { path: 'rent/:id/:del', component: RentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
