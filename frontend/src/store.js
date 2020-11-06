import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {
    productListReducer,
    productDetailsReducer
} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'
const reducer = combineReducers({
    productList : productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
})
const cartItemFromStorage = localStorage.getItem('cartItems') ? JSON.parse
(localStorage.getItem('cartItems')) : []
const intialState = {
    card: {cardItems:cartItemFromStorage}
}

const middleware = [thunk]

const store = createStore(reducer,intialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store;