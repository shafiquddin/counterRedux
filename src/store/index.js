import { configureStore } from '@reduxjs/toolkit';
// import {createStore } from 'redux'
// export const INCREMENT = 'increment';
// export const DECREMENT = 'decrement';
// export const INCREMENTBY = 'incrementby';
// export const TOGGLE = 'toggle';

// const counterReducer = (state = initialCounter,action) => {
//     if(action.type === INCREMENT){
//         return{
//             ...state,
//             counter : state.counter + 1,
//         }
//     }
//     if(action.type === DECREMENT){
//         return{
//             ...state,
//             counter : state.counter - 1,
//         }
//     }
//     if(action.type === INCREMENTBY){
//         return{
//             ...state,
//             counter : state.counter + action.value,
//         }
//     }
//     if(action.type === TOGGLE){
//         return{
//             ...state,
//             showCounter : !state.showCounter,
//         }
//     }
//     return state;
// }
// const store = createStore(counterReducer);

import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
    reducer:{
        counter : counterReducer,
        auth:authReducer
    }
})
export default store;