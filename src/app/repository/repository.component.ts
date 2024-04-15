import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit{

  totalItems!:number;
  publicRepos:any;
  currentPage:number=1;
  perPage:any=10

  constructor(public api:ApiService){}

  ngOnInit(): void {
      this.fetchRepo()
  }

  fetchRepo(){
    if(this.api.Username.length>0){
      this.api.getRepo(this.currentPage,this.perPage).subscribe(
        (response)=>{
          this.publicRepos=(response);
        }
      )}
  }

  recivePage(pageobj:any){
    this.currentPage=pageobj['pageNo']
    this.perPage=pageobj['perPage']
    this.fetchRepo()
  }

  
}
