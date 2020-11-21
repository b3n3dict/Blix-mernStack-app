import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Row,Col,Form,Button} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {register} from '../actions/userActions'

const RegisterScreen = ({history,location}) => {
    const [name,setName] = useState('') 
    const [email,setEmail] = useState('') 
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [message,setMessage] = useState(null)
 
    const dispatch = useDispatch()
    const userRegister = useSelector(state => state.userRegister)
    
    const {loading,error,userInfo} = userRegister
   
    const redirect = location.search ? location.search.split('=')[1] : '/'
     useEffect(()=>{
      if(userInfo){
          history.push(redirect)
      }
    },[history,userInfo,redirect])
    const submitHandler =(e)=>{
        e.preventDefault()
        if(password !== confirmPassword){
             setMessage('Passwords Not Match')
        }else{
            dispatch(register(name,email,password))
            
        }
        
    }
    return (
        <FormContainer>
            <h1>Sign Up</h1>
            {message && <Message severity="error">{message}</Message>}
            {error && <Message severity="error">{error}</Message>}
            {loading ? <Loader/> : <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label> 
                    <Form.Control type='name' placeholder="Enter Name" value={name} 
                    onChange={(e)=> setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label> 
                    <Form.Control type='email' placeholder="Enter email" value={email} 
                    onChange={(e)=> setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label> 
                    <Form.Control type='password' placeholder="Enter password" value={password} 
                    onChange={(e)=> setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label> 
                    <Form.Control type='password' placeholder="Confirm password" value={confirmPassword} 
                    onChange={(e)=> setConfirmPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button type='submit' varient='primary'>Register</Button>
            </Form> }
            
            <Row className="py-3">
                <Col>
                    Have and Account? <Link to={ redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default RegisterScreen
