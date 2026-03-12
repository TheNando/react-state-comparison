export type Action =
  | { type: typeof ADD_TODO; payload: { title: string; }; }
  | { type: typeof CLEAR_COMPLETED_TODOS; }
  | { type: typeof REMOVE_TODO; payload: { id: string; }; }
  | { type: typeof TOGGLE_ALL_TODOS; payload: { completed: boolean; }; }
  | { type: typeof TOGGLE_TODO; payload: { id: string; }; }
  | { type: typeof UPDATE_TODO; payload: { id: string; title: string; }; };

export const ADD_TODO = "ADD_TODO";
export const CLEAR_COMPLETED_TODOS = "CLEAR_COMPLETED_TODOS";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_ALL_TODOS = "TOGGLE_ALL_TODOS";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";