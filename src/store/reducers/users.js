export const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.payload];
    case 'GET_USERS':
      return action.payload;

    default:
      return state;
  }
};
