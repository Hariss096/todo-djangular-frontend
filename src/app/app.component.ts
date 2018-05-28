import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private url = 'http://127.0.0.1:8000/todoapi/';
  todos: any[];

  constructor(private http: Http) {
    http.get(this.url).subscribe(resp => {
      this.todos = resp.json();
    });
  }

  onLogin( input: HTMLInputElement) {
    let pos = { name: input.value };
    input.value = '';

    this.http.post(this.url, pos)
      .subscribe(response => {
        pos = response.json();
        this.todos.splice(0, 0, pos);
      });
  }
}
