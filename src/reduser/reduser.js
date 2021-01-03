import { ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDER } from './../types'
import { bake_cookie, read_cookie,} from 'sfcookies'
const reminder = (state = [], action) => {
    let reminder = null;

    state = read_cookie('reminder')

    if (action.type === ADD_REMINDER) {
        reminder = [...state, { text: action.text, date: action.date, length: Math.random() }]
        bake_cookie('reminder' , reminder)
        return reminder

    } else if (action.type === REMOVE_REMINDER) {
        reminder = state.filter(reminder => reminder.length !== action.length)
        bake_cookie('reminder' , reminder)
        return reminder

    } else if (action.type === CLEAR_REMINDER) {
        reminder = []
        bake_cookie('reminder' , reminder)
        return reminder
    } else {
        return state
    }

}

export default reminder;