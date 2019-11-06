import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.scss']
})
export class CourselistComponent implements OnInit {

  constructor(private http:HttpClient,private route: Router,public auth:AuthService) { }
  courselist={}
  get_courselist=function() {
    this.http
      .get("http://localhost:3000/api/admin-dashboard/courselist")
      .subscribe((res:any[])=>{
        this.courselist=res;
        console.log(this.courselist)
        console.log(res);
      })    
  }

  courseedit(course){
    this.auth.course2=course;
    this.route.navigate(['/editcourse'])
  }
  ngOnInit() {
    this.get_courselist();
  }
  deleteCourse (course) {
    this.auth.deleteCourse(course)
    .subscribe(
      res => {
       
      } ,
      
      err => {  }
    )
    
  }
}
