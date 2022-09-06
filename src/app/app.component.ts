import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  istrue = false;
  constructor() {
    console.log(this.istrue);

    // console.log("111111111111",environment.production); // Logs false for default environment
  }
  title = 'crud';


  darkmode() {
    this.istrue = !this.istrue;
    console.log(this.istrue);


  }
}
