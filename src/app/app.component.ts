import { Component, VERSION } from '@angular/core';
import { range } from 'rxjs/dist/types';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  fname=""
  lname=""
  gname=""
  count=0
  ngSubmit(fname,lname)
  {
   this.fname= fname;
   this.lname=lname;
   this.gname=fname+"_"+lname+this.count++
  };
  
}
