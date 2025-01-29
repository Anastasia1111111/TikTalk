import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}
  baseApiUrl = 'https://icherniakov.ru/yt-course/';
  getTestAccounts() {
    return this.http.get(`${this.baseApiUrl}account/test_accounts`);
  }
}
