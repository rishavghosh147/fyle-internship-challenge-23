import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RepositoryComponent } from './repository.component';
import { ApiService } from '../services/api.service';

describe('RepositoryComponent', () => {
  let component: RepositoryComponent;
  let fixture: ComponentFixture<RepositoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepositoryComponent],
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
