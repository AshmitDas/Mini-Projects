import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-playground';
  sub:any;
  msg:any = [];

  ngOnInit(): void{
    // const broadCast = timer(1000,5000);

    // this.sub = broadCast.subscribe((res) => {
    //   console.log(res);
    //   this.msg.push(res);

    // }, (error) => {
    //   console.log(error);
    // })
  }
}
