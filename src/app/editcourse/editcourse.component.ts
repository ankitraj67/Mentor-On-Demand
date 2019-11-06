import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editcourse',
  templateUrl: './editcourse.component.html',
  styleUrls: ['./editcourse.component.scss']
})
export class EditcourseComponent implements OnInit {
  courseUpdateData:any = {}
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
    this.courseUpdateData = this._auth.course2;
  }
  editCourses(){
    console.log(this.courseUpdateData);
    this._auth.editCourses(this.courseUpdateData)
    .subscribe(
      res=>{
        this._router.navigate(['/courselist'])
      },
      err=>{
        console.log(err)
      }
    )
     }
 }

