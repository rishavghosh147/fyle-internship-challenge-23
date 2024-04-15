import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit{
  @Output() pageobj=new EventEmitter<any>;

  currentPage:number=1;
  perPage:number=10;
  iterationArray: number[]=[]

  
  constructor(private api: ApiService){}

  calPages(){
    const temp=Math.ceil(Number(this.api.data.public_repos) / this.perPage)
    this.iterationArray= Array(temp).fill(0).map((x, i) => i);
  }

  ngOnInit(): void {
    this.calPages()
  }

  pageSwitch(no:number){
    this.currentPage=no;
    this.pageobj.emit(
      {pageNo:this.currentPage,
        perPage:this.perPage
      })
  }


  isDropdownOpen:boolean=false;

  onChangePageSize(size: number): void {
    this.toggleDropdown()
    this.perPage = size;
    this.currentPage = 1;

    this.calPages()

    this.pageobj.emit(
      {pageNo:this.currentPage,
        perPage:this.perPage
      })
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
    setTimeout(() => {
      this.isDropdownOpen = false;
    }, 10000);
  }
  

}
