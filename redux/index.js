import { createStore, applyMiddleware } from 'redux'
import loggers from 'redux-logger'


var increment = "increment"
var decrement = "decrement"

var history = []


const store = createStore(reducer, applyMiddleware(loggers.default))


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
    switch(action.type){
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

store.subscribe(()=>{
    history.push(store.getState())
    console.log(history)
})

function increments(){
    return { type: "increment" }
}

function increment_by_value(value){
   return {type :"increment_by_value", payload: value}

}


// action = {type:"inccrement"}
// store.dispatch({ type: "increment" });
// store.dispatch({ type: "increment" })
// store.dispatch({ type: "decrement" })

setInterval(
    () => store.dispatch(increment_by_value(600)),2000
)









