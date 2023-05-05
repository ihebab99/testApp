import { Component } from '@angular/core';
import { Wrw1Component } from './wrw1/wrw1.component';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router){}
  title = 'helloapp';

  gotowrw1(){
    this.router.navigateByUrl('/whoarewe1');
  }

}
