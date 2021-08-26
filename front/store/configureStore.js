import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'react-redux';
import reducer from '../reducers/index';

const configureStore = () => {
  const store = createStore(reducer);
  // store.dispatch({
  //   type: 'CHANGE_NICKNAME',
  //   data: '2now',
  // });
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
