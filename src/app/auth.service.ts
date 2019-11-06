import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3000/api"
  private _loginUrl = "http://localhost:3000/api"
  private _courseurl="http://localhost:3000/api/admin-dashboard/addcourse";
  private _updateCourseUrl="http://localhost:3000/api/editcourse"
  private _deleteCourseUrl="http://localhost:3000/api/deleteCourse"
  private _updatMentoreUrl="http://localhost:3000/api/editmentor"

   course2;
   mentor1;

  constructor(private http: HttpClient,
    private _router: Router) { }

  studentsignup(user){
    return this.http.post<any>(this._registerUrl+'/studentsignup',user)
  }
  mentorsignup(mentor){
    return this.http.post<any>(this._registerUrl+'/mentorsignup',mentor)
  }
 studentlogin(user){
    return this.http.post<any>(this._loginUrl+'/studentlogin',user)
 }
 mentorlogin(mentor){
  return this.http.post<any>(this._loginUrl+'/mentorlogin',mentor)
}
loggedIn(){
  return !!localStorage.getItem('token')
}

logoutUser(){
  localStorage.removeItem('token')
  this._router.navigate(['/home'])
  
}
getToken(){
  return localStorage.getItem('token')
}

getUserName() {
  return localStorage.getItem('username');
}
adminlogin(admin){
  return this.http.post<any>(this._loginUrl+'/adminlogin',admin)
}
course(data){
  return this.http.post<any>(this._courseurl,data);
}
editCourses(course) {
  console.log(course);
  return this.http.put<any>(this._updateCourseUrl, course)
}
editMentors(mentor){
console.log(mentor);
return this.http.put<any>(this._updatMentoreUrl, mentor)
}
deleteCourse(course){
  return this.http.post<any>(this._deleteCourseUrl, course)
}

}

