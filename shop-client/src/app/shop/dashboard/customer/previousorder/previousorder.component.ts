import { CommonServiceService } from './../../../../common-service.service';
import { Component, OnInit } from '@angular/core';
import {Observable} from'rxjs';
@Component({
  selector: 'app-previousorder',
  templateUrl: './previousorder.component.html',
  styleUrls: ['./previousorder.component.css']
})
export class PreviousorderComponent implements OnInit {
  ors:any;
  constructor(private commonService:CommonServiceService) { }
  getOrders(){
    let obs:Observable<any> = this.commonService.callAjax4();
    obs.subscribe(data=>{
      this.ors = data;
      
    },
    err=>{
      console.log('Category error is =',err);
    },
    ()=>{
      console.log('completed 1');
    });
  }
  getPreviousOrders(){
    console.log("In the function");
    let promise = this.commonService.getPreviousOrders();
      promise.then(response=>{
          response.json().then(data=>{
            console.log('Data is ',data);
            // data = data.filter(item => {
            //   item.order.forEach(element => element != null)
            // });
            // console.log('Data is ',data);
           this.commonService.previousOrder = data;

            //  this.userService.getStatusSubject().next(data);
            //  if(data['status']=='S'){
            //    localStorage.tokenId = data['token'];
            //    localStorage.role=data['role'];
            //  }
            //this.message = data.message;
          }).catch(err=>{
            console.log('invalid json ',err);
          })
      }).catch(err=>{
          console.log('INvalid response ',err);
      })
  }
  ngOnInit() {
    // this.getOrders();
    this.getPreviousOrders();
  }

}
