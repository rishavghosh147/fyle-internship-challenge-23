import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-username-input',
  templateUrl: './username-input.component.html',
  styleUrls: ['./username-input.component.scss']
})
export class UsernameInputComponent {

  username:string='';
  temp:string='';
  error:boolean=false;

  checkusername:boolean=false;

  constructor(private api: ApiService, private route: Router) {}

  public loading:boolean = false;

  onClick() {
    if(this.username.length>0){
      this.loading=true
      this.api.getUser(this.username).subscribe(
        (user) => {
          this.api.data=user;
          this.route.navigate(['/profile']);
          this.loading = false;
        },
        (error) => {
          this.loading=false
          this.temp=this.username
          this.error=true;
          setTimeout(() => {this.error = false;this.username=''}, 5000);
      });
    }else{
      this.checkusername=true;
      setTimeout(()=>{this.checkusername=false;},3000)
    }}
}
