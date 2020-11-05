import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Row,Col,Image,ListGroup,Card,Button } from 'react-bootstrap'
import Rating from '../components/Rating';
import {listProductDetails} from '../actions/productActions';
import {useDispatch,useSelector} from 'react-redux'
const ProductScreen = ({match}) => {
   
       const productDetails = useSelector(state => state.productDetails)
       const {loading,error,product} = productDetails
       const dispatch = useDispatch();
        useEffect(()=>{
              dispatch(listProductDetails(match.params.id))
          },[dispatch,match])
    return (
        <>
           <Link className="btn btn-light my-3" to="/" >
           Go Back
           </Link>
           {loading ? <h1>loading...</h1>: error ? <h3> {error}</h3> : <Row>
             <Col md={6}>
               <Image src={product.image} alt={product.name} fluid/>
             </Col>
             <Col md={3}>
                  <ListGroup variant="flush">
                      <ListGroup.Item>
                          <h3>{product.name}</h3>
                      </ListGroup.Item>
                      <ListGroup.Item>
                          <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                      </ListGroup.Item>
                      <ListGroup.Item>
                          Price: &#8377;{product.price}
                      </ListGroup.Item>
                      <ListGroup.Item>
                          Description: {product.description}
                      </ListGroup.Item>
                  </ListGroup>
             </Col>
             <Col md={3}>
             <Card>
                 <ListGroup variant='flush'>
                     <ListGroup.Item>
                         <Row>
                             <Col>
                                 Price :
                             </Col>
                             <Col>
                                 <strong>&#8377;{product.price}</strong>
                             </Col>
                         </Row>
                     </ListGroup.Item>

                     <ListGroup.Item>
                         <Row>
                             <Col>
                                 Status :
                             </Col>
                             <Col>
                                 {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                             </Col>
                         </Row>
                     </ListGroup.Item>
                     <ListGroup.Item>
                         <Button  className="btn-block" type='button' disabled={product.countInStock === 0}>
                             Add To Cart
                         </Button>
                     </ListGroup.Item>
                 </ListGroup>
                 </Card>
             </Col>
           </Row> }
           
        </>
    )
}

export default ProductScreen
