import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private userDataSubject = new BehaviorSubject<any>(null);
  userData$ = this.userDataSubject.asObservable();

  Username: string='';
  data:any;
  repo: any;

  constructor(private httpClient: HttpClient) { }

  getUser(githubUsername: string) {
    this.Username = githubUsername;
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }

  setUserData(data: any) {
    this.data=data;
  }

  getRepo(page:number, perPage:number) {
    return this.httpClient.get(`https://api.github.com/users/${this.Username}/repos?page=${page}&per_page=${perPage}`);
  }

}
