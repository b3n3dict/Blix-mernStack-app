import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {
    productListReducer,
    productDetailsReducer,
    productDeleteReducer,
    productCreateReducer,
    productUpdateReducer,
    productReviewCreateReducer
} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'
import {userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
     userListReducer, 
     userDeleteReducer,
    userUpdateReducer} from './reducers/userReducers'
import {orderCreateReducer,orderDeliverReducer,orderDetailsReducer,orderListMyReducer,orderListReducer,orderPayReducer} from './reducers/orderReducer';
const reducer = combineReducers({
    productList : productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productReviewCreate: productReviewCreateReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails : userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    orderCreate: orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
    orderDeliver : orderDeliverReducer,

})
const cartItemFromStorage = localStorage.getItem('cartItems') ? JSON.parse
(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? 
JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? 
JSON.parse(localStorage.getItem('shippingAddress')) : {}

const paymentMethodFromStorage = localStorage.getItem('paymentMethod') ? 
JSON.parse(localStorage.getItem('paymentMethod')) : {}

const intialState = {
    cart: {cartItems:cartItemFromStorage,shippingAddress:shippingAddressFromStorage,paymentMethod:paymentMethodFromStorage},
    userLogin: {userInfo:userInfoFromStorage},
}


const middleware = [thunk]

const store = createStore(reducer,intialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store;