import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UsernameInputComponent } from './username-input.component';
import { ApiService } from '../services/api.service';

describe('UsernameInputComponent', () => { 
  let component: UsernameInputComponent;
  let fixture: ComponentFixture<UsernameInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsernameInputComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [ApiService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
