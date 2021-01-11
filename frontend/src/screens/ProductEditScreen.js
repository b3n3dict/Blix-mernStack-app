import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {listProductDetails, } from '../actions/productActions'

const productEditScreen = ({history,match}) => {

    const productId = match.params.id 
    
    const [name,setName] = useState('') 
    const [price,setPrice] = useState(0) 
    const [image,setImage] = useState('')
    const [brand,setBrand] = useState('')
    const [category,setCategory] = useState('')
    const [countInStock,setCountInStock] = useState(0)
    const [description,setDescription] = useState('')


    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const {loading,error,product} = productDetails
   
  
     useEffect(()=>{

        if(!product.name || product._id !== productId){
          dispatch(listProductDetails(productId))
   }else{
       setName(product.name)
       setPrice(product.price)
       setImage(product.image)
       setBrand(product.brand)
       setCategory(product.category)
       setCountInStock(product.countInStock)
       setDescription(product.description)

   }
       
    },[dispatch,product,productId,history])
    const submitHandler =(e)=>{
        e.preventDefault()
       dispatch(updateUser({_id:userId,name,email,isAdmin}))
    }
    return (
<>
      <Link to='/admin/userlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit User</h1>
        {loadingUdate && <Loader/>}
        {errorUpdate && <Message severity="error">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='name'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='isadmin'>
              <Form.Check
                type='checkbox'
                label='Is Admin'
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type='submit' variant='primary'  >
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default productEditScreen
