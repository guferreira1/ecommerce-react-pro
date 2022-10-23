import { combineReducers } from 'redux'
import { cartReducer } from './reducers/cart/cart.reducer'
import { userReducer } from './reducers/user/UserReducer'

export const rootReducer = combineReducers({
  userReducer,
  cartReducer
})
