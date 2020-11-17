import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Row,Col,Form,Button} from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import Header from '../components/Header'
import Loader from '../components/Loader'
import Message from '../components/Message'

const RegisterScreen = () => {
    return (
        <FormContainer>
            <h1>RegisterScreen</h1>
        </FormContainer>
    )
}

export default RegisterScreen
