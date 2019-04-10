import { CommonService } from './../../../../common.service';
import { Observable,BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  subCategories:any;
  cId:string;
  constructor(private commonService:CommonService) { }
 


  ngOnInit() {
    this.getSubCategories();
    this.commonService.getBS().subscribe(data=>{
     this.cId =data; 
    }
    ,err=>{
      
    },()=>{

    });
  }


  getSubCategories(){
    let observable:Observable<any> = this.commonService.callAjax2();
    observable.subscribe(data=>{
      this.subCategories = data;
    },
    err=>{
      console.log('Error is ',err);
    },
    ()=>{
      console.log('completed');
    });
  }

  sendSCID(id:string){
    console.log(id);
    let bs1:BehaviorSubject<string> = this.commonService.getBS1();
    bs1.next(id);
    console.log(id);
  }
  
}
