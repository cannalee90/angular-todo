import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';
import { last } from 'rxjs/operators';

import { ITodo } from './models';
import { IAppState } from '../store';
import { CLEAR_TODOS, TOGGLE_TODO, ADD_TODO, DELETE_TODO } from './actions';

class Todo implements ITodo {
  constructor(public id: number, public body: string, public isComplete: boolean) {}
}

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit, OnDestroy {
  @select() readonly todos$: Observable<ITodo[]>;

  model: ITodo = new Todo(0, '', false);
  nextId = 0;
  private sub: any;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
    this.clearForm();
    this.sub = this.todos$
      .subscribe((todos) => {
        this.nextId = (!todos.length) ? 1 : todos[todos.length - 1].id + 1;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  clearForm(): void {
    this.model = new Todo(0, '', false);
  }

  clearTodos(): void {
    this.ngRedux.dispatch({type: CLEAR_TODOS});
  }

  toggleTodo(todo: ITodo): void {
    this.ngRedux.dispatch({type: TOGGLE_TODO, payload: todo});
  }

  deleteTodo(todo: ITodo): void {
    this.ngRedux.dispatch({type: DELETE_TODO, payload: todo});
  }

  onSubmit(): void {
    this.model.id = this.nextId;
    this.ngRedux.dispatch({type: ADD_TODO, payload: this.model});
    this.clearForm();
  }
}
