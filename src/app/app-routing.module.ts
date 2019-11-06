import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StudentsignupComponent } from './studentsignup/studentsignup.component';
import { MentorsignupComponent} from './mentorsignup/mentorsignup.component';
import { StudentloginComponent} from './studentlogin/studentlogin.component';
import {  MentorloginComponent} from './mentorlogin/mentorlogin.component';
import { ContactusComponent} from './contactus/contactus.component';
import { CoursesComponent } from './courses/courses.component';
import {AdminloginComponent} from './adminlogin/adminlogin.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import { AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { StudentlistComponent} from './studentlist/studentlist.component';
import { MentorlistComponent} from './mentorlist/mentorlist.component';
import {  CourselistComponent} from './courselist/courselist.component';
import { EditcourseComponent} from './editcourse/editcourse.component';
import { EditmentorComponent} from './editmentor/editmentor.component';
import {StudentDashboardComponent} from './student-dashboard/student-dashboard.component';
import {PaymentComponent} from './payment/payment.component';
import { from } from 'rxjs';


const routes: Routes = [
                        {path:'',redirectTo:'/home',pathMatch:'full'},
                        {path:'home',component:HomeComponent},
                        {path:'register',component:RegisterComponent},
                        {path:'login',component:LoginComponent},
                        {path:'studentsignup',component:StudentsignupComponent},
                        {path:'mentorsignup',component:MentorsignupComponent},
                        {path:'studentlogin',component:StudentloginComponent},
                        {path:'mentorlogin',component:MentorloginComponent},
                        {path:'contactus',component:ContactusComponent},
                        {path:'courses',component:CoursesComponent},
                        {path:'adminlogin',component:AdminloginComponent},
                        {path:'aboutus',component:AboutusComponent},
                        {path:'admin-dashboard',component:AdminDashboardComponent},
                        {path:'addcourse',component:AddcourseComponent},
                        {path:'studentlist',component:StudentlistComponent},
                        {path:'mentorlist',component:MentorlistComponent},
                        {path:'courselist',component: CourselistComponent},
                        {path:'editcourse',component:EditcourseComponent},
                        {path:'editmentor',component:EditmentorComponent},
                        {path:'student-dashboard',component:StudentDashboardComponent},
                        {path:'payment',component:PaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
