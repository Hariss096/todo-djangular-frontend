import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CrudService {

  private url = 'http://127.0.0.1:8000/todoapi/';

  constructor(private http: Http) { }


  getData() {
    return this.http.get(this.url);
  }

  postData(pos) {
    return this.http.post(this.url, pos);
  }

  deleteData(id) {
    return this.http.delete(this.url + id);
  }

}
