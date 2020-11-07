import React,{useEffect} from 'react'
import Link from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {Row,Col,ListGroup,Image,Form,Button,Card} from 'react-bootstrap'
import {Message} from '../components/Message'
import {addToCart} from '../actions/cartActions'



const CartScreen = ({match,location}) => {
    
    const cart = useSelector(state =>state.cart)

const dispatch = useDispatch()

useEffect(()=>{
        dispatch(addToCart(match.parasms.id,location.search.qty))

},[dispatch,match,location])
    return (
        <div>
            Cart
        </div>
    )
}

export default CartScreen
