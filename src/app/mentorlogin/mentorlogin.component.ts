import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-mentorlogin',
  templateUrl: './mentorlogin.component.html',
  styleUrls: ['./mentorlogin.component.scss']
})
export class MentorloginComponent implements OnInit {


  mentorloginData={}
  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }
  mentorlogin(){
    this._auth.mentorlogin(this.mentorloginData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token',res.token)
     },
      err => console.log(err)
    )

    
  }
}
