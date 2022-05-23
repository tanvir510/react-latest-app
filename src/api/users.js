// File Import
import Axios from 'axios';
import { apiEndpoints } from './apiEndpoints';

export class UserAPI {
  // Fetch all users
  static getUsers(params) {
    return Axios.get(apiEndpoints.GET_USERS, { params });
  }
}

// export const UserAPI = {
//   // Fetch all users
//   getUsers() {
//     return Axios.get(apiEndpoints.GET_USERS);
//   }
// };
