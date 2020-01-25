import { createStore } from 'redux';

//Action generators - function that returns action objects

const incrementCount = ({incrementBy = 1}={})=> ({
    type:'INCREMENT',
    incrementBy
});

const decrementCount = ( {decrementBy = 1} = {} )=>({
    type:'DECREMENT',
    decrementBy
});

const resetCount = ({resetTo = 0}= {})=>({
    type:'RESET',
    resetTo
});

//Reducers
//-they are a pure function
//-never change state or action

const countReducer = (state = {count: 0}, action) => {

    switch(action.type){
        case 'INCREMENT': 
        return {
            count: state.count+action.incrementBy
        };
        case 'DECREMENT':
            return {
                count: state.count-action.decrementBy
            };
        case 'RESET': 
            return{
                count: action.resetTo
            };

        default:
            return state;
    }
}


const store = createStore(countReducer);

store.subscribe(()=>{
    console.log(store.getState());
});


//increment the count
store.dispatch(incrementCount({ incrementBy: 5}));
store.dispatch(incrementCount({ incrementBy: 10}));
store.dispatch(incrementCount());

//decrement
store.dispatch(decrementCount({ decrementBy : 8 }));
store.dispatch(decrementCount({ decrementBy : 2 }));
store.dispatch(decrementCount());



//Reset
store.dispatch(resetCount({resetTo:10}));


