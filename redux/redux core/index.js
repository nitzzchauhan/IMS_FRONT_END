import { createStore, applyMiddleware } from 'redux'
import loggers from 'redux-logger'

import axios from 'axios'


import {thunk} from 'redux-thunk'


var increment = "increment"
var decrement = "decrement"

var history = []


const store = createStore(reducer, applyMiddleware(loggers.default, thunk))


// {amount:0}

function reducer(state = { amount: 0 }, action) {

    // if (action.type == "increment") {
    //     // state.amount = state.amount + 100
    //     // return state            //mutation

    //     return { amount: state.amount + 150 } //non-mutation
    // }
    // if (action.type == "decrement") {
    //     return { amount: state.amount - 100 }
    // }
    switch (action.type) {
        case 'increment_by_value':
            return { amount: state.amount + action.payload }
        case 'increment':
            // state.amount = state.amount + 100
            // return state 
            return { amount: state.amount + 150 }

        case 'decrement':
            return { amount: state.amount - 100 }

        default:
            return state
    }



}

// action --> objects 

// function init(){
//     // const data =  axios.get('http://localhost:3000/accounts/1')
//     // console.log(data)
//     store.dispatch({ type: "increment_by_value", payload: 500 })
// }
async function getUser(dispatch, getState){
    const {data} =  await axios.get('http://localhost:3000/accounts/2')
    // console.log(data)
    dispatch({ type: "increment_by_value", payload: data.amount })
}

store.subscribe(() => {
    history.push(store.getState())
    console.log(history)
})

function increments() {
    return { type: "increment" }
}

function increment_by_value(value) {
    return { type: "increment_by_value", payload: value }

}


// action = {type:"inccrement"}
// store.dispatch({ type: "increment" });
// store.dispatch({ type: "increment" })
// store.dispatch({ type: "decrement" })

setInterval(
    () => store.dispatch(getUser), 2000
)












