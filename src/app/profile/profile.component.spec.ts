import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProfileComponent } from './profile.component';
import { ApiService } from '../services/api.service';
import { RepositoryComponent } from '../repository/repository.component';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent,RepositoryComponent],
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set userData from ApiService', () => {
    const mockUserData = { id: 1, username: 'testUser' };
    const apiService = TestBed.inject(ApiService);
    
    apiService.setUserData(mockUserData)
    expect(component.userData).toBeUndefined();

    component.ngOnInit()
    expect(component.userData).toEqual(mockUserData);
  });
  
});
