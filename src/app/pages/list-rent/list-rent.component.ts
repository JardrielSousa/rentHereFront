import { RentService } from './../../service/rent.service';
import { CarRentService } from './../../service/car-rent.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-rent',
  templateUrl: './list-rent.component.html',
  styleUrls: ['./list-rent.component.css']
})
export class ListRentComponent implements OnInit {

  rents:any=[];
  constructor(private rentService:RentService,
    private active :ActivatedRoute) { }

  ngOnInit(): void {
    this.rentService.readAll()
    .subscribe((resp:any)=>{
      this.rents = resp.content
      console.log(resp);

    });


  }
  displayedColumns: string[] = ['pickup', 'devolution', 'payment','user','car','action'];
}
