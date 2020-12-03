import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Container} from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import NotFound from './components/NotFound'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen  from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import Electronics from './components/Categories/Electronics'
const App=()=> {
  return (
    <Router>
    <Header/>
     <main className="py-2 mt-5 pt-5">
     <Container>
      <Switch>
     <Route path="/" component={HomeScreen} exact/> 
     <Route path="/electronics" component={Electronics}/> 
     <Route path="/product/:id" component={ProductScreen} /> 
     <Route path="/cart/:id?" component={CartScreen} />
     <Route path="/login" component={LoginScreen}/>
     <Route path="/register" component={RegisterScreen}/>
     <Route path="/profile" component={ProfileScreen}/>
     <Route path="/shipping" component={ShippingScreen}/>
     <Route path="/payment" component={PaymentScreen}/>
     <Route path="/placeorder" component={PlaceOrderScreen}/>
     <Route path="/order/:id" component={OrderScreen}/>
     <Route component={NotFound} />
     </Switch>
     </Container>
     
     
     </main>
     <Footer/>

    </Router>
  );
}

export default App;
