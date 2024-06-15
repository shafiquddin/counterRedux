import {createStore} from 'redux'
const initialCounter = {counter : 0, showCounter:true} ;
const counterReducer = (state = initialCounter,action) => {
    if(action.type === 'INCR'){
        return{
            ...state,
            counter : state.counter + 1,
        }
    }
    if(action.type === 'DECR'){
        return{
            ...state,
            counter : state.counter - 1,
        }
    }
    if(action.type === 'FIVE'){
        return{
            ...state,
            counter : state.counter + action.value,
        }
    }
    if(action.type === 'TOGGLE'){
        return{
            ...state,
            showCounter : !state.showCounter,
        }
    }
    return state;
}
const store = createStore(counterReducer);
export default store;