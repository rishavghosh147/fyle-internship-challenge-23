import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationComponent } from './pagination.component'; 
import { ApiService } from '../services/api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

describe('PaginationComponent', () => {
  let component: PaginationComponent; 
  let fixture: ComponentFixture<PaginationComponent>; 
  let apiService: ApiService; 
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent], 
      providers: [ApiService], 
      imports: [HttpClientTestingModule], 
    });
    fixture = TestBed.createComponent(PaginationComponent); 
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService); 
  });


  it('should initialize with default values', () => {

    expect(component.currentPage).toBe(1);
    expect(component.perPage).toBe(10);
    expect(component.iterationArray).toEqual([]);
    expect(component.isDropdownOpen).toBe(false);
  });

  it('should emit page object when pageSwitch is called', () => {
    spyOn(component.pageobj, 'emit');
    component.pageSwitch(3);
    expect(component.currentPage).toBe(3);
    expect(component.pageobj.emit).toHaveBeenCalledWith({
      pageNo: 3,
      perPage: 10,
    });
  });


  it('should toggle dropdown state when toggleDropdown is called', () => {
    component.toggleDropdown();
    expect(component.isDropdownOpen).toBe(true);
    component.toggleDropdown();
    expect(component.isDropdownOpen).toBe(false);
  });
});
