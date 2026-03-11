import {
  ADD_TODO,
  CLEAR_COMPLETED_TODOS,
  nanoid,
  REMOVE_TODO,
  TOGGLE_ALL_TODOS,
  TOGGLE_TODO,
  UPDATE_TODO,
  type Action,
  type Todo,
} from "./utils";

export const todoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: nanoid(),
        title: action.payload.title,
        completed: false,
      });

    case CLEAR_COMPLETED_TODOS:
      return state.filter((todo) => !todo.completed);

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);

    case TOGGLE_ALL_TODOS:
      return state.map((todo) =>
        todo.completed !== action.payload.completed
          ? { ...todo, completed: action.payload.completed }
          : todo,
      );

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo,
      );

    case UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo,
      );
  }
};
