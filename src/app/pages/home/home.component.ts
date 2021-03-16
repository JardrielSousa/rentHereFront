import { CarRentService } from './../../service/car-rent.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cars:any=[];
  constructor(private carRentService:CarRentService,
    private active :ActivatedRoute) { }

  ngOnInit(): void {
    this.carRentService.readAll()
    .subscribe((resp:any)=>{
      this.cars = resp.content
      console.log(resp);

    });


  }
  displayedColumns: string[] = ['plaque', 'model', 'rentPrice','quantity','action'];
}
