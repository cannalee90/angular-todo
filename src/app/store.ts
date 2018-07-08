import { ITodo } from './lists/models';
import { ListActions } from './lists/actions';

export interface IAppState {
  todos: ITodo[];
  loading: false;
}

export const INITIAL_STATE: IAppState = {
  todos: [],
  loading: false,
};

export function rootReducer(state, action): IAppState {
  switch (action.type) {
    case ListActions.CLEAR_TODOS:
      return {
        ...state,
        todos: [],
      };
    case ListActions.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case ListActions.TOGGLE_TODO: {
      return {
        ...state,
        todos: state.todos.map((cur) => {
          cur.isComplete = (cur.id === action.payload.id) ? !cur.isComplete : cur.isComplete;
          return cur;
        }),
      };
    }
    case ListActions.DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((cur) => cur.id !== action.payload.id ),
      };
    }
  }
  return state;
}
