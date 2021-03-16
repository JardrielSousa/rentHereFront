import { ICar } from './../../interface/ICar';
import { CarRentService } from './../../service/car-rent.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-rent',
  templateUrl: './car-rent.component.html',
  styleUrls: ['./car-rent.component.css']
})
export class CarRentComponent implements OnInit {
  specialtieslist:any;
  id : number;
  active : boolean = true;
  isDelete:any;
  isCreate:any;
  isDeleteOrEdit:boolean=false;
  car:ICar;
  customPatterns = { '0': { pattern: new RegExp('\[a-zA-Z\]')} };
  constructor(private fb: FormBuilder,
    private router:Router,
    private carRentService:CarRentService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.active = true;
    const id = this.route.snapshot.paramMap.get('id');
    const del = this.route.snapshot.paramMap.get('del');

    this.id = parseInt(id)
    this.isDelete = (del === "true");
    if(id){
      if(this.isDelete){
        this.carForm.controls['plaque'].disable();
        this.carForm.controls['model'].disable();
        this.carForm.controls['rentPrice'].disable();
        this.carForm.controls['quantity'].disable();
        this.isDeleteOrEdit = true;
      }else{
        this.isDeleteOrEdit = true;
      }

      this.isCreate = false
      this.carRentService.readById(id)
      .subscribe((resp:any)=>{
        this.car = resp
      });

    }else{
      this.isCreate = true;
      this.isDeleteOrEdit = false;
    }

  }


  carForm = this.fb.group({
    plaque: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(256)],
    ],
    model: ['', [Validators.required]],
    rentPrice: [0.0, [Validators.required]],
    quantity: [
      '',
    ],
  });

  onSubmit(){
    this.carForm.markAllAsTouched();
    console.log(
      this.carForm.value
    );

    if(this.carForm.invalid)
      return;
      this.carRentService.create(this.carForm.value).subscribe((resp:any)=>{
        this.carRentService.verMsg('car was created!!!')
        this.router.navigate(['home'])
      });
  }

  ondelete(){
    this.carRentService.delete(this.id)
    .subscribe((resp:any)=>{
      this.router.navigate(['home'])
    });
  }

  get f() {
    return this.carForm.controls
  }
}
