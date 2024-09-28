import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";


const initialState = {
    balance: {
        value: 0
    }
}

export const depositAction = createAction("balance/deposit")
export const withdrawAction = createAction("balance/withdraw")

// export const deposit = (value) => {

//     return {
//         type: "balance/deposit",
//         payload: value
//     }
// }

// export const withdraw = (value) => {

//     return {
//         type: "balance/withdraw",
//         payload: value
//     }
// }


export const reducer = createReducer(initialState, (builder) => {
    builder.addCase(depositAction, (state, action) => {
        return {
            ...state,
            balance: {
                    value: state.balance.value + action.payload
                }
        }
    })
    builder.addCase(withdrawAction, (state, action) => {
        return {
            ...state,
            balance: {
                    value: state.balance.value - action.payload
                }
        }
    })
})

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "balance/deposit":
//             return {
//                 ...state,
//                 balance: {
//                     value: state.balance.value + action.payload
//                 }
//             }
//          case "balance/withdraw":
//             return {
//                 ...state,
//                 balance: {
//                     value: state.balance.value - action.payload
//                 }
//             }

//         default:
//             return state
//     }
    
// }

export const store = configureStore({
    reducer: reducer
})