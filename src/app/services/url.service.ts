import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }
  serverConfig = false;
  private urlHost = 'http://localhost:4200/';
  private apiHost = '';
  private url = {};
  urlMock() {
      return this.url = {
          'tableList': this.urlHost + './assets/data.json'
         
      }
  }
  urlApi() {
      return this.url = {
          'tableList': this.apiHost + ''
      }
  }
  urlConfig() {
      return this.serverConfig ? this.urlApi() : this.urlMock();
  }
}
