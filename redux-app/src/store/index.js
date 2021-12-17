import {createSlice, configureStore} from "@reduxjs/toolkit";
import counterReducer, {counterSlice} from "./slices/counterSlice";
import authReducer, {authSlice} from "./slices/authSlice";




const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})

export default store

// const counterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'increment': {
//             return {
//                 counter: state.counter + 1,
//                 showCounter: state.showCounter
//             }
//         }
//         case 'decrement': {
//             return {
//                 counter: state.counter - 1,
//                 showCounter: state.showCounter
//             }
//         }
//         case 'increase': {
//             return {
//                 counter: state.counter + action.amount,
//                 showCounter: state.showCounter
//             }
//         }
//         case 'toggle': {
//             return {
//                 ...state,
//                 showCounter: !state.showCounter
//             }
//         }
//         default: {
//             return state
//         }
//     }
// }

