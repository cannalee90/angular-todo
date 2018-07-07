import { ITodo } from './lists/models';

const dummyItems = [
  {id: 1, body: 'This is first Todo', status: 'undone'},
  {id: 2, body: 'This is second Todo', status: 'undone'},
  {id: 3, body: 'This is third Todo', status: 'undone'}
];

export interface IAppState {
  todos: ITodo[];
  loading: false;
}

export const INITIAL_STATE: IAppState = {
  todos: dummyItems,
  loading: false,
};

export function rootReducer(state, action) {
  return state;
}
