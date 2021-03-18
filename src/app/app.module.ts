import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { CarRentComponent } from './pages/car-rent/car-rent.component';
import { HomeComponent } from './pages/home/home.component';
import { RentComponent } from './pages/rent/rent.component';
import { NavComponent } from './pages/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ListCarRentComponent } from './pages/list-car-rent/list-car-rent.component';
import { ListRentComponent } from './pages/list-rent/list-rent.component';

@NgModule({
  declarations: [
    AppComponent,
    CarRentComponent,
    HomeComponent,
    RentComponent,
    NavComponent,
    ListCarRentComponent,
    ListRentComponent   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule,
    MatStepperModule,
    MatSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
