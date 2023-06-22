import { createStore,applyMiddleware } from 'redux'
import CartItems from '../Reducers/CartItems/CartItems'
import LoggerMiddleware from 'redux-logger'

export default Store = createStore(CartItems, applyMiddleware(LoggerMiddleware))



