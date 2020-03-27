import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import filterReducer from '../reducers/filters';
import expensesReducer from '../reducers/expenses';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

export default ()=>{
    const store = createStore(combineReducers(
        {
            expenses:expensesReducer,
            filter:filterReducer    
        }
    ),
    composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};
