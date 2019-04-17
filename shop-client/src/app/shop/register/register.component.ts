import { Component, OnInit } from '@angular/core';
import { UserService } from '../login/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  message:string;
  constructor(private userService:UserService) { }

  ngOnInit(){

  }

  doRegister(userid,password){
    console.log(userid);
    console.log(password);
    let promise = this.userService.doRegister(userid, password);
      promise.then(response=>{
          response.json().then(data=>{
            console.log('Data is ',data);

             this.userService.getStatusSubject().next(data);
             if(data['status']=='S'){
               localStorage.tokenId = data['token'];
               localStorage.role=data['role'];
             }
            this.message = data.message;
          }).catch(err=>{
            console.log('invalid json ',err);
          })
      }).catch(err=>{
          console.log('INvalid response ',err);
      })
    }
  

}
