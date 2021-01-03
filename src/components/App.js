import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from "moment"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Color from './colors'
import Clock from './Clock'

import logo from './../images.png'
import { add_reminder, remove_reminder, clear_reminder } from './../actions/action'
// import reminder from '../reduser/reduser'
class App extends Component {

    state = {
        text: '',
        date: new Date()
    }
    render_Riminder = () => {
        const { reminder } = this.props;
        return ( 
            <ul className = "list-group" > 
              {
                reminder.map(reminder => {
                    return ( 
                        <li key = { reminder.length }
                        className = "list-group-item" >
                        <div> { reminder.text } </div> 
                        <div> { moment(new Date(reminder.date)).fromNow()} </div> 
                        <div className = "closeIcon"
                        onClick = {() => this.props.remove_reminder(reminder.length)}> <span>X</span> </div> 
                        </li>
                    )
                })
            } </ul>
        )
    }

    render() {
        // document.querySelector(".reset-options").onclick = function () {

        //     localStorage.clear();
        //     window.location.reload();
        //   }
        // console.log(this.props)
        return ( 
                <div className = "App" >
                    <Clock />
                    <Color />
                    <img src = { logo }/> 
                    <div  >
                    <h2 className = "reminder" > What Should you Do ? </h2> 
                </div> 
                    <input className = "form-control"
                    type = "text"
                    value = { this.state.text }
                    placeholder = "Enter What Do You DO...?"
                    onChange = {(e) => this.setState({ text: e.target.value })}
                />
                 <DatePicker
                    className="from-control"
                    placeholderText = "Enter Date"
                    value = { this.state.date }
                    selected = { this.state.date }
                    onChange = {(date) => { this.setState({ date }) }}
                    showTimeSelect
                    timeFormat="HH:mm"
                    dateFormat = "MMM d, yyyy h:mm aa"
                    timeCaption = "S.time"
                />
                <button 
                    onClick = { () => {
                        this.props.add_reminder(this.state.text, this.state.date)
                        this.setState({ text: '', date: '' })
                    }}
                        className = "btn btn- btn-block mainColor" >
                        Add Reminder you 
                </button>
                    { this.render_Riminder() } 
                 <button 
                       onClick = {() => this.props.clear_reminder()}
                       className = " btn btn-danger btn-block clearReminder" >
                       clear Reminder you 
                </button> 
                
                 {/* <button
                        // onClick = {()=> this.onclick}
                        className="reset-options btn btn-primary btn-danger btn-block ">
                        Reset Options
                </button> */}
            </div>
    )
}
}

// function mapDispatchToProps (dispadch) {
//     return {
//         add_reminder : () => dispatch ( add_reminder() )
//     }
// }
// _____________________This is more ADVANCED_________________




// _____________________This is Tow ADVANCED_________________


// function mapStateToProps(state) {
//     return {
// import "react-datepicker/dist/react-datepicker.css";
//         reminder: state
//     }
// } 



export default connect(state => {
    return { reminder: state }
}, {
    add_reminder,
    remove_reminder,
    clear_reminder

})(App);