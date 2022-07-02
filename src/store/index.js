import { configureStore } from '@reduxjs/toolkit';
// createStore is deprecated, legacy_createStore is used to denote that it is legacy ; the updated one is configureStore


const reducerFn = (state = { counter: 0 }, action, reducer) => {

}

const store = configureStore(reducerFn)
export default store