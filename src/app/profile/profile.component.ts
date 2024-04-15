import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  userData: any;

  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.userData=this.api.data;
  }
}
