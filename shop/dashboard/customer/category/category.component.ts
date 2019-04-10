import { Observable, BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  categories:any;

  constructor(private commonService:CommonService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    let observable:Observable<any> = this.commonService.callAjax1();
    observable.subscribe(data=>{
      this.categories = data;
    },
    err=>{
      console.log('Error is ',err);
    },
    ()=>{
      console.log('completed');
    });
  }

  sendCID(id:string){
    console.log(id);
    let bs:BehaviorSubject<string> = this.commonService.getBS();
    bs.next(id);
  }
}