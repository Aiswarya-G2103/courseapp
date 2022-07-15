import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getLocalePluralCase } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CourseserviceService {

  constructor(private http:HttpClient) {
    
   }



  addcourse(course:any){
 return this.http.post<any>("https://mylinkurcodesapp.herokuopp.com/addcourse",course)
  }
}
