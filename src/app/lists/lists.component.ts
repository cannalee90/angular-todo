import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs';

import { ITodo } from './models';
import { IAppState } from '../store';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  @select() readonly todos$: Observable<ITodo[]>;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

}
