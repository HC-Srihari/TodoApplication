import {configureStore} from '@reduxjs/toolkit'
import slice from './slice'

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("todoApp");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};


const store = configureStore({
  reducer: slice,
  preloadedState: loadState(),
});

export default store
