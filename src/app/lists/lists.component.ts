import { Component, OnInit } from '@angular/core';
import { ITodo } from './models';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  todos: ITodo[] = [
    {id: 1, body: 'This is first Todo', status: 'undone'},
    {id: 2, body: 'This is second Todo', status: 'undone'},
    {id: 3, body: 'This is third Todo', status: 'undone'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
