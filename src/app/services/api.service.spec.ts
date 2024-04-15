import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch user data from GitHub API', () => {
    const username = 'rishavghosh147';

    service.getUser(username).subscribe((userData) => {
      expect(userData).not.toBeNull();
    });

    const req = httpMock.expectOne(`https://api.github.com/users/${username}`);
    expect(req.request.method).toBe('GET');
  });

  it('should set user data on api service variable',()=>{
    const temp ={id:1}

    service.setUserData(temp)
    expect(service.data).toEqual(temp)
  })

  it('should retrieve repositories from GitHub API', inject([ApiService], (service: ApiService) => {
    const username = 'rishavghosh147';
    const page = 1;
    const perPage = 1;
    const mockResponse = [{ name: 'repo1' }, { name: 'repo2' }];

    service.Username=username;

    service.getRepo(page, perPage).subscribe((data) => {
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`https://api.github.com/users/${username}/repos?page=${page}&per_page=${perPage}`);
    expect(req.request.method).toBe('GET');

    req.flush(mockResponse);
  }));
  

});
