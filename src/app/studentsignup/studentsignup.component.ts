import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-studentsignup',
  templateUrl: './studentsignup.component.html',
  styleUrls: ['./studentsignup.component.scss']
})
export class StudentsignupComponent implements OnInit {
  studentsignupData={}
  
  constructor(private _auth: AuthService, private route: Router) { }

  ngOnInit() {
  }
  studentsignup(){
   this._auth.studentsignup(this.studentsignupData)
   .subscribe(
     res => {
        console.log(res)
        localStorage.setItem('token',res.token)
     },
     err => console.log(err)
   )
  }
  studentlogin(){
    this.route.navigate(['/studentlogin'])
  }
}
