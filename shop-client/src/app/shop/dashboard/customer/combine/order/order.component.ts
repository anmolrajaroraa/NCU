import { CommonServiceService } from './../../../../../common-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private commonService:CommonServiceService) { }

  ngOnInit() {
    console.log(" ");
    //this.commonService.getProducts();
    console.log(" ");
    this.commonService.getBS1().subscribe(data=>{
      console.log(" ");
      this.commonService.pid = data.pid;
      console.log(" ");
      console.log('Orders are :',this.commonService.orders);
        this.commonService.addOrders();
      // setTimeout(()=>{
      //   console.log(" ");
      //   console.log('Orders are :',this.commonService.orders);
      //   this.commonService.addOrders();
      //   console.log(" ");
      // },0);
      console.log(" ");
    });
    console.log(" ");
    
  }
  
  pay(){
    //let json = JSON.stringify(this.commonService.orders);
    //console.log(json);
    let promise = this.commonService.createOrder();
      promise.then(response=>{
          response.json().then(data=>{
            console.log('Data is ',data);

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
  }
