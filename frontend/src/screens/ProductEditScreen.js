import React, { useState, useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {listProductDetails, } from '../actions/productActions'
import {updateProduct} from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'
import axios from 'axios'
const ProductEditScreen = ({history,match}) => {

    const productId = match.params.id 
    
    const [name,setName] = useState('') 
    const [price,setPrice] = useState(0) 
    const [image,setImage] = useState('')
    const [brand,setBrand] = useState('')
    const [category,setCategory] = useState('')
    const [countInStock,setCountInStock] = useState(0)
    const [description,setDescription] = useState('')
    const [uploading,setUploading] = useState(false)


    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const {loading,error,product} = productDetails

    const productUpdate = useSelector(state => state.productUpdate)
    const {loading:loadingUpdate,error:errorUpdate,success:successUpdate} = productUpdate
   
  
     useEffect(()=>{
         if(successUpdate){
           dispatch({type:PRODUCT_UPDATE_RESET})
           history.push('/admin/productlist')
         }else{
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
         }
       
       
    },[dispatch,product,productId,history,successUpdate])
    const submitHandler =(e)=>{
          e.preventDefault()
          dispatch(updateProduct({
            _id:productId,
            name,
            price,
            image,
            brand,
            category,
            countInStock,
            description
          }))
    }

    const uploadFileHandler = async (e)=>{
      const file = e.target.files[0]
      const formData = new FormData()
      formData.append('image',file)
      setUploading(true)
      try {
         const config = {
           headers : {
             "Content-Type": "multipart/form-data"
           },
         }
         const {data} = await axios.post('/api/upload' , formData,config)
         setImage(data)
         setUploading(false)
      } catch (e) {
        console.log(e)
         setUploading(false)
      }
 
      
    }
    return (
<>
      <Link to='/admin/productlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Product</h1>
        {loadingUpdate && <Loader/> }
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='price'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter Price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>
      
            <Form.Group controlId='image'>
              <Form.Control
                type='text'
                placeholder = 'Enter Image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              {uploading && <Loader/>}
              <Form.File id="image-file" label="Choose Image" custom onChange={uploadFileHandler}>
                
              </Form.File>
            </Form.Group>

            <Form.Group controlId='brand'>
              <Form.Control
                type='text'
                placeholder = 'Enter Brand'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='category'>
              <Form.Control
                type='text'
                placeholder = 'Enter Category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='countInStock'>
              <Form.Label>Count In Stock</Form.Label>
              <Form.Control
                type='number'
                placeholder='Enter Price'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId='description'>
              <Form.Control
                type='text'
                placeholder = 'Enter Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
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

export default ProductEditScreen;
