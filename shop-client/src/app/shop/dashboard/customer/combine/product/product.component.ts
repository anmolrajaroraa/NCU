import { CommonServiceService } from './../../../../../common-service.service';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private commonService:CommonServiceService) { }

  ngOnInit() {
    this.commonService.getProducts().subscribe(data=>{
      this.commonService.products =data;
      this.commonService.getBS().subscribe(data=>{
        this.commonService.cid = data.cid;
        this.commonService.scid = data.scid;
          this.commonService.productFilter();
      },
      err=>{
        console.log(err);
      },
      ()=>{ 
        console.log('completed');
      });
    });
    
  }

  sendPID(id){
    this.commonService.flag = null;
    let bs:BehaviorSubject<any> = this.commonService.getBS1();
    bs.next({pid:id});
  }

}