import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private http:HttpClient,private _auth:AuthService,private route:Router) { }


  courselist={};
  get_courselist=function() {
    this.http
      .get("http://localhost:3000/api/courses")
      .subscribe((res:any[])=>{
        this.courselist=res;
        console.log(res);
      })    
  }
  payment(){
    this.route.navigate(['/login'])
  }  
  ngOnInit() {
    this.get_courselist()
  }

  
}
