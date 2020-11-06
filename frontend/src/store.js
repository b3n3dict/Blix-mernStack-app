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
const intialState = {}

const middleware = [thunk]

const store = createStore(reducer,intialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store;