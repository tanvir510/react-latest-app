// Library import
import Axios from 'axios';

// File import
// import { store } from 'store';

export const http = Axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.REACT_APP_API_URL
});

// Request interceptor
http.interceptors.request.use(async (request) => {
  const authToken = window.localStorage.getItem('auth_token');

  if (authToken) {
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${authToken}`
    };
  }

  return request;
});

// Response interceptor
http.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error?.response) {
      /**
       * In case of
       * - Other responses
       * - Returns message from server explicitly
       */
      if (error.response.status === 401) {
        // Clear state and logout from system
        window.localStorage.removeItem('auth_token');
      } else if (error.response.status === 500) {
        // TODO: Display service not available

        return Promise.reject('');
      } else {
        return Promise.reject(error.response);
      }
    }

    return Promise.reject(error);
  }
);
