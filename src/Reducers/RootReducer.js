import {combineReducers} from 'redux'
import Todo from './Todos'
import VisibilityFilter from './VisibilityFilter'

export default combineReducers({
    Todo,
    VisibilityFilter
})