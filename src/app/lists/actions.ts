import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';
import { ITodo } from './models';

export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CLEAR_TODOS = 'CLEAR_TODOS';
export const ADD_TODO = 'ADD_TODO';


@Injectable({
  providedIn: 'root'
})
export class ListActions {
  constructor(
    private ngRedux: NgRedux<IAppState>
  ) {}

  static readonly TOGGLE_TODO = 'TOGGLE_TODO';
  static readonly DELETE_TODO = 'DELETE_TODO';
  static readonly CLEAR_TODOS = 'CLEAR_TODOS';
  static readonly ADD_TODO = 'ADD_TODO';

  clearTodos(): void {
    this.ngRedux.dispatch({ type: CLEAR_TODOS });
  }

  toggleTodo(todo: ITodo): void {
    this.ngRedux.dispatch({type: TOGGLE_TODO, payload: todo});
  }

  deleteTodo(todo: ITodo): void {
    this.ngRedux.dispatch({type: DELETE_TODO, payload: todo});
  }

  addTodo(todo: ITodo): void {
    this.ngRedux.dispatch({type: ADD_TODO, payload: todo});
  }
}
