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
    
    this.commonService.getProducts();
    this.commonService.getBS1().subscribe(data=>{
      this.commonService.pid = data.pid;
      setTimeout(()=>{
        console.log('Orders are :',this.commonService.orders);
        this.commonService.addOrders();
        
      },0);
    });
    
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
