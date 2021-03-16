import { CarRentComponent } from './pages/car-rent/car-rent.component';
import { RentComponent } from './pages/rent/rent.component';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/home' , pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'carRent', component: CarRentComponent },
  { path: 'carRent/:id/true', component: CarRentComponent },
  { path: 'carRent/:id/false', component: CarRentComponent },
  { path: 'rent', component: RentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
