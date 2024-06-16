import { createSlice,configureStore } from '@reduxjs/toolkit';
// import {createStore } from 'redux'
// export const INCREMENT = 'increment';
// export const DECREMENT = 'decrement';
// export const INCREMENTBY = 'incrementby';
// export const TOGGLE = 'toggle';

const initialState = {counter : 0, showCounter:true};

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter + action.payload 
        },
        toggle(state){
            state.showCounter = !state.showCounter
        }
    }
})

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

const store = configureStore({
    reducer:counterSlice.reducer
})
export const counterActions = counterSlice.actions;
export default store;