import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentlistComponent implements OnInit {

  constructor(private http:HttpClient) { }
  studentlist={};
  get_studentlist=function() {
    this.http
      .get("http://localhost:3000/api/admin-dashboard/studentlist")
      .subscribe((res:any[])=>{
        this.studentlist=res;
        console.log(this.studentlist)
        console.log(res);
      })    
  }
  ngOnInit() {
    this.get_studentlist()
  }

}
