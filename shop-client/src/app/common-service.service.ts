import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CommonServiceService {
  categories:any;
  subcategories:any;
  filtersub:any = null;
  filterpro:any = null;
  cid:string;
  scid:string;
  products:any;
  pid:string;
  amount:number =0 ;
  orders:object[] = [];
  previousOrder:any;
  bs:BehaviorSubject<any> = new BehaviorSubject<any>({});
  bs1:BehaviorSubject<any> = new BehaviorSubject<any>({});
  flag:any = null;
  constructor(private http:HttpClient) { }

  callAjax1():Observable<any>{
    const url="http://localhost:1234/api/category";
    return this.http.get(url);
  }

  
  getCategories(){
    let obs:Observable<any> = this.callAjax1();
    obs.subscribe(data=>{
      this.categories = data;
      console.log(this.categories);
    },
    err=>{
      console.log('Category error is =',err);
    },
    ()=>{
      console.log('completed 1');
    });
  }

  callAjax2():Observable<any>{
    const url="http://localhost:1234/api/subcategory";
    return this.http.get(url);
  }
  
  subFilter(){
    this.filtersub = this.subcategories.filter(
      item=>item.category_id === this.cid
    ) ;

      console.log(this.filtersub);
  }

  remove(id:string){
    
  }

  productFilter(){
    this.filterpro = this.products.filter(
      item=>item.sub_category_id === this.scid
    );
    if(this.filterpro != null){
      console.log(this.filterpro);
    }
    
  }

  addOrders(){
    console.log('Orders 1:',this.orders);
    let obj = this.products.find(element => {
        if(element.product_id == this.pid){
          return element; 
        }
    })
    if(this.flag == null){
      console.log(this.orders);
      this.orders.push(obj);
      this.flag = this.pid;
      console.log("Flag is ", this.flag);
    }
    if(obj != null){
      this.amount += parseInt(obj.price);
    }
    console.log('amount ',this.amount);
    console.log('Orders 2:',this.orders);
  }

  getSubcategories(){
    let obs:Observable<any> = this.callAjax2();
      return obs;
    // obs.subscribe(data=>{
    //   this.subcategories = data;
    //   console.log(this.subcategories);
    // },
    // err=>{
    //   console.log('Category error is =',err);
    // },
    // ()=>{
    //   console.log('completed 1');
    // });
  }


  callAjax3():Observable<any>{
    const url="http://localhost:1234/api/product";
    return this.http.get(url);
  }

  callAjax4(){
    const url="http://localhost:1234/api/order";
    return this.http.get(url);
  }
  getProducts(){
    let obs:Observable<any> = this.callAjax3();
      return obs;
    // obs.subscribe(data=>{
    //   this.products = data;
      
    // },
    // err=>{
    //   console.log('Category error is =',err);
    // },
    // ()=>{
    //   console.log('completed 1');
    // });
  }

  getBS(){
    return this.bs;
  }

  getBS1(){
    return this.bs1;
  }

  createOrder(){
    console.log("order is", this.orders);
    var orderArray = {
      'orders':this.orders
    }
    console.log('JSON is ',JSON.stringify(orderArray));
    let promise = fetch(environment.orderURL,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderArray)
    });
    return promise;
  }

  getPreviousOrders(){
    console.log("In service")
    let promise = fetch(environment.orderURL,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return promise;
  }
  
}