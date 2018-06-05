import { CrudService } from './crud.service';
import { Component, OnInit, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todos: any[];

  constructor(private cs: CrudService) {

  }

  ngOnInit() {
    this.cs.getData().
      subscribe(resp => {
      this.todos = resp.json();
      // console.log(this.todos);
    });
}

  onEnter( input: HTMLInputElement) {
    const post = { name: input.value };
    input.value = '';

    this.cs.postData(post)
      .subscribe(response => {
        post['id'] = response.json().id;
        this.todos.splice(0, 0, post);
        // console.log(pos.id);
      });
  }

  onDelete(todo) {
    this.cs.deleteData(todo['id']).subscribe(
      response => {
        let index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
      });
  }
}
