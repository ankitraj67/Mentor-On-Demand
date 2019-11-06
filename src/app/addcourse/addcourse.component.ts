import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
 
@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.scss']
})
export class AddcourseComponent implements OnInit {

  courseData={}
  message=''
  constructor(private _auth:AuthService) { }

  ngOnInit() {
  }


  course(){
    this._auth.course(this.courseData)
      .subscribe(
        res=>
        {
          console.log(res)
          this.message="Course added successfully!"
          this.courseData={}
        },
        err=>console.log(err)
      )
  }

}

