// File Import
import { types } from './types';

export const todoAction = {
  addTodo: (payload) => ({
    type: types.ADD_TODO,
    payload
  })
};
