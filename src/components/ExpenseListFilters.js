import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';
 

class ExpenseListFilters extends React.Component {

    state = {
        calenderFocused: null
    };

    onDatesChange = ({startDate, endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calenderFocused)=>{
        this.setState(()=>{
            return {
                calenderFocused
            };
        });
    };

    render(){
        return(
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input className="text-input" type="text" placeholder="Search Expenses" value={this.props.filters.text} onChange={(e)=>{
                            this.props.dispatch(setTextFilter(e.target.value))
                        }} />
                    </div>
                    <div className="input-group__item">
                        <select className="select" value={this.props.filters.sortBy} onChange={(e)=>{
                            this.props.dispatch( e.target.value === 'date' ? sortByDate() : sortByAmount())
                        }}>
                            <option value="date" >Date</option>
                            <option value="amount" >Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                        startDate={this.props.filters.startDate}
                        startDateId="id1"
                        endDate={this.props.filters.endDate}
                        endDateId="id2"
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        showClearDates = {true}
                        numberOfMonths = {1}
                        isOutsideRange = {()=>false}
                    />
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return{
        filters: state.filter
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);