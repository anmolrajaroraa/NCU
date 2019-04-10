import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private bs:BehaviorSubject<string> = new BehaviorSubject<string>("");
  private bs1:BehaviorSubject<string> = new BehaviorSubject<string>("");
  cid:string;
  scid:string;
  constructor(private http:HttpClient) { }

    callAjax1():Observable<any>{
      const url= "http://localhost:1234/api/category";
      return this.http.get(url);
    }

    callAjax2():Observable<any>{
      const url="http://localhost:1234/api/subcategory";
      return this.http.get(url);
    }
    callAjax3():Observable<any>{
      const url="http://localhost:1234/api/product";
      return this.http.get(url);
    }
    
    getBS():BehaviorSubject<string>{
      return this.bs;
    }
    getBS1():BehaviorSubject<string>{
      return this.bs1;
    }

}
