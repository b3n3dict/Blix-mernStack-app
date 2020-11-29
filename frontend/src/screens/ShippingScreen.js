
import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Form,Button} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import {saveShippingAddress} from '../actions/cartActions'
const ShippingScreen = ({history}) => {
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart;
    const dispatch = useDispatch()
    const [address,setAddress] = useState(shippingAddress.address)
    const [city,setCity] = useState(shippingAddress.city)
    const [pincode,setPincode] = useState(shippingAddress.pincode)
    const [state,setState] = useState(shippingAddress.state)

    const submitHandler =(e)=>{
        e.preventDefault()
       dispatch(saveShippingAddress({address, city, pincode, state}))
       console.log({address, city, pincode, state})
       history.push('/payment')
      
    }
    return (
        <FormContainer>
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler} >
            <Form.Group controlId='address'>
                    <Form.Label>Address</Form.Label> 
                    <Form.Control type='text' placeholder="Enter Address" value={address || ''} 
                    required
                    onChange={(e)=> setAddress(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            <Form.Group controlId='city'>
                    <Form.Label>City</Form.Label> 
                    <Form.Control type='text' placeholder="Enter City" value={city || ''} 
                    required
                    onChange={(e)=> setCity(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            <Form.Group controlId='pincode'>
                    <Form.Label>Pincode</Form.Label> 
                    <Form.Control type='text' placeholder="Enter Pincode" value={pincode || ''} 
                    required
                    onChange={(e)=> setPincode(e.target.value)}>
                    </Form.Control>
                </Form.Group>
            <Form.Group controlId='state'>
                    <Form.Label>State</Form.Label> 
                    <Form.Control type='text' placeholder="Enter State" value={state || ''} 
                    required
                    onChange={(e)=> setState(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary">Continue</Button>
                </Form>
        </FormContainer>
    )
}

export default ShippingScreen
