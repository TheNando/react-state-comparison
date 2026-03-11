import {
  ADD_ITEM,
  nanoid,
  REMOVE_ALL_ITEMS,
  REMOVE_COMPLETED_ITEMS,
  REMOVE_ITEM,
  TOGGLE_ALL,
  TOGGLE_ITEM,
  UPDATE_ITEM,
  type Action,
  type Todo,
} from "./utils";

export const todoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case ADD_ITEM:
      return state.concat({
        id: nanoid(),
        title: action.payload.title,
        completed: false,
      });
    case UPDATE_ITEM:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo,
      );
    case REMOVE_ITEM:
      return state.filter((todo) => todo.id !== action.payload.id);
    case TOGGLE_ITEM:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    case REMOVE_ALL_ITEMS:
      return [];
    case TOGGLE_ALL:
      return state.map((todo) =>
        todo.completed !== action.payload.completed
          ? { ...todo, completed: action.payload.completed }
          : todo,
      );
    case REMOVE_COMPLETED_ITEMS:
      return state.filter((todo) => !todo.completed);
  }
};
