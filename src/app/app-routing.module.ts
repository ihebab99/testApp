import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Section1Component } from './section1/section1.component';
import { Wrw1Component } from './wrw1/wrw1.component';
import { Wrw2Component } from './wrw2/wrw2.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';


const routes: Routes = [
  { path: "dashboard", component: DashboardComponent, },
  { path: "whoarewe1", component: Wrw1Component },
  { path: "section1", component: Section1Component },
  { path: "section2", component: Section2Component },
  { path: "section3", component: Section3Component },
  { path: "whoarewe2", component: Wrw2Component },
  {path:"" , redirectTo:"dashboard", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
