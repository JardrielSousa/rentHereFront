import { environment } from './../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = `${environment.url}user`;
  constructor(private http: HttpClient,
    private snackBar:MatSnackBar) { }


  verMsg(msg:string,isError:boolean=false):void{
    console.log(msg)
    this.snackBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top",
      panelClass: isError ? ['msgError'] : ['msgSucess']
    })

  }

  create(doctor: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, doctor);
  }

  update(id:any,doctor: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, doctor);
  }

  delete(id:any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }

  getCarBy(name:any){
    return this.http.get<any>(`${this.baseUrl}/specialties/${name}`);
  }

  readAll(){
    return this.http.get<any>(this.baseUrl);
  }

  readById(id:any){
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}
