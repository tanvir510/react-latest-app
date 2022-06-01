// File Import
import { types } from './types';

export const userAction = {
  addUser: (payload) => ({
    type: types.ADD_USER,
    payload
  }),

  getUsers: (payload) => ({
    type: types.GET_USERS,
    payload
  })
};
