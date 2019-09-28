import { Component, OnInit } from '@angular/core';
import { ApiService } from './ourApis/api.service';
import { showData } from './showData.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

  
})
export class AppComponent implements OnInit {
 constructor(private ApiService: ApiService) {
 }
 showDataArr: showData[];
 resultArray:any;
 name = '';
 company = '';
 ngOnInit(){
   this.ApiService.getData().subscribe(
     (data)=>{
      console.log(data);
      this.showDataArr = data;
      console.log(this.showDataArr);
      this.resultArray = this.showDataArr.map(function(a) {return a["iname"];});
      console.log(this.resultArray);
   });
 }

 /*getAllDevices(){
  this.namelistService.getDevices()
  .subscribe(
    (data) => {
      this.devices = data;
      this.resultArray = this.devices.map(function(a) {return a["_id"];});

    },
    error => console.log('Server error'),
  ); 
}*/

 
}
