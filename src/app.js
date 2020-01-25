//install->import->use

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import {addExpense, removeExpense, editExpense} from './actions/expenses';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'water bill', note: 'pay the bill before 10' , amount: 500, createdAt: 5000}));
store.dispatch(addExpense({description: 'gas bill', note: 'pay the bill by mid of the month' , amount: 900, createdAt: 2000}));
store.dispatch(addExpense({description: 'rent', note: 'Final payment' , amount: 4000, createdAt: 10000}));
store.dispatch(setTextFilter(''));
const state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filter)
console.log(visibleExpenses);
const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
