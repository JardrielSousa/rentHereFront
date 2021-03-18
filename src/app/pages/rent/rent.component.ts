import { Payment } from './../../interface/Payment';
import { IRent } from './../../interface/Irent';
import { IUser } from './../../interface/IUser';
import { ICar } from './../../interface/ICar';
import { CarRentService } from './../../service/car-rent.service';
import { UserService } from './../../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RentService } from './../../service/rent.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {
  active:boolean = true;
  userForm: FormGroup;
  carForm: FormGroup;
  rentForm: FormGroup;
  isEditable = false;
  cars:ICar[];
  car:ICar;
  user:IUser;
  rent:IRent;
  selected :ICar;
  payment:Payment;
  isDelete:any;
  isCreate:any;
  isDeleteOrEdit:boolean=false;
  id:number;
  constructor(private _formBuilder: FormBuilder,
    private fb: FormBuilder,
    private rentService:RentService,
    private userService:UserService,
    private carService:CarRentService,
    private router:Router,
    private route:ActivatedRoute) {}

  ngOnInit() {
    this.carService.readAll()
    .subscribe((resp:any)=>{
        this.cars = resp.content
        console.log(this.cars);
    })
  this.allForms();
  const id = this.route.snapshot.paramMap.get('id');
  const del = this.route.snapshot.paramMap.get('del');

  this.id = parseInt(id)
  this.rentService.readById(id)
  .subscribe((resp:any)=>{
    this.selected = resp.car.model
  })
  this.isDelete = (del === "true");

  }


  private allForms() {
    this.carForm = this._formBuilder.group({
      car: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(256)],
      ]
    });
    this.userForm = this.fb.group({
      name: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(256)],
      ],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
    });
    this.rentForm = this.fb.group({
      pickup: [new Date, Validators.required],
      devolution: [new Date, Validators.required],
      payment: ['', Validators.required],
      userId: [this?.user?.id],
      carId: [this?.selected?.id]
    });
  }

  onSubmitUser(){
    this.userForm.markAllAsTouched();
    if(this.userForm.invalid)
      return;
    this.userService.create(this.userForm.value).subscribe((resp:any)=>{
      this.userService.verMsg('user was created!!!')
      this.user  = resp;
    });
  }
  onSubmitRent(){
    this.rentForm.markAllAsTouched();
    if(this.rentForm.invalid)
      return;
    this.rentService.create({
      pickup:this.rentForm.value.pickup,
      devolution:this.rentForm.value.devolution,
      payment:this.rentForm.value.payment,
      userId:this.user.id,
      carId:this.selected.id
    }).subscribe((resp:any)=>{
      this.rentService.verMsg('rent was created!!!')
    });
  }

  get f() {
    return this.userForm.controls
  }

  get c() {
    return this.carForm.controls
  }

  get r() {
    return this.rentForm.controls
  }
}
