import { CommonService } from './../../../../common.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:any;
  scId:string;
  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.getProducts();
    this.commonService.getBS1().subscribe(data=>{
      console.log(data);
      this.scId =data; 
      console.log(this.scId);
     }
     ,err=>{
       console.log(err);
     },()=>{
 
     });
  }

  getProducts(){
    let observable:Observable<any> = this.commonService.callAjax3();
    observable.subscribe(data=>{
      this.products = data;
    },
    err=>{
      console.log('Error is ',err);
    },
    ()=>{
      console.log('completed');
    });
  }

}
