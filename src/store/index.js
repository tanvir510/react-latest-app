// Library Import
import { createStore, compose } from 'redux';

// File Import
import reducers from './reducers/index';

export default createStore(
  reducers,
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
