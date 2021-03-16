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
  specialtieslist:any
  active : boolean = true;
  isDelete:any;
  isCreate:any;
  isDeleteOrEdit:boolean=false;
  constructor(private fb: FormBuilder,
    private router:Router,
    private carRentService:CarRentService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.active = true;
    const id = this.route.snapshot.paramMap.get('id');
    const del = this.route.snapshot.paramMap.get('del');
    this.isDelete = (del === "true");
    if(id == null){
      this.isCreate = true;
      this.isDeleteOrEdit = false;
    }else{
      this.isCreate = false
    }
    if(this.isDelete){
      this.carForm.controls['name'].disable();
      this.carForm.controls['birthDate'].disable();
      this.carForm.controls['active'].disable();
      this.carForm.controls['specialties'].disable();
      this.isDeleteOrEdit = true;
    }else if(this.isCreate == false){
      this.isDeleteOrEdit = true;
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
        console.log(resp);

      });
  }

  get f() {
    return this.carForm.controls
  }
}
