import { CommonServiceService } from './../../../../../common-service.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  
  constructor(private commonService:CommonServiceService) { }

  ngOnInit() {
    this.commonService.getCategories();
  }


  sendCID(id){
    let bs:BehaviorSubject<any> = this.commonService.getBS();
    console.log('Category id in category ts is ---- ',id);
    bs.next({cid:id});
  }

}