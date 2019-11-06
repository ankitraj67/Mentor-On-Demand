import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-mentorlist',
  templateUrl: './mentorlist.component.html',
  styleUrls: ['./mentorlist.component.scss']
})
export class MentorlistComponent implements OnInit {

  constructor(private http:HttpClient,private route: Router,public auth:AuthService) { }
  mentorlist={};
  get_mentorlist=function() {
    this.http
      .get("http://localhost:3000/api/admin-dashboard/mentorlist")
      .subscribe((res:any[])=>{
        this.mentorlist=res;
        console.log(this.mentorlist)
        console.log(res);
      })    
  }
  editmentor(){
    this.route.navigate(['/editmentor'])
  }
  ngOnInit() {
    this.get_mentorlist()
  }

}
