import {
  isActive,
  isNotId,
  newTodo,
  withCompletedAs,
  toggleIfId,
  updateIfId,
  type Todo
} from "@/lib";

import {
  ADD_TODO,
  CLEAR_COMPLETED_TODOS,
  REMOVE_TODO,
  TOGGLE_ALL_TODOS,
  TOGGLE_TODO,
  UPDATE_TODO,
  type Action,
} from "./actions";

export const todoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(newTodo(action.payload.title));

    case CLEAR_COMPLETED_TODOS:
      return state.filter(isActive);

    case REMOVE_TODO:
      return state.filter(isNotId(action.payload.id));

    case TOGGLE_ALL_TODOS:
      return state.map(withCompletedAs(action.payload.completed));

    case TOGGLE_TODO:
      return state.map(toggleIfId(action.payload.id));

    case UPDATE_TODO:
      return state.map(updateIfId(action.payload.id, action.payload.title));
  }
};
