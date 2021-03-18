import { CarRentService } from '../../service/car-rent.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-car-rent',
  templateUrl: './list-car-rent.component.html',
  styleUrls: ['./list-car-rent.component.css']
})
export class ListCarRentComponent implements OnInit {
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
