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

const App=()=> {
  return (
    <Router>
    <Header/>
     <main className="py-2 mt-5 pt-5">
     <Container>
      <Switch>
     <Route path="/" component={HomeScreen} exact/> 
     <Route path="/product/:id" component={ProductScreen} /> 
     <Route path="/cart/:id?" component={CartScreen} />
     <Route path="/login" component={LoginScreen}/>
     <Route path="/register" component={RegisterScreen}/>
     <Route component={NotFound} />
     </Switch>
     </Container>
     
     
     </main>
     <Footer/>

    </Router>
  );
}

export default App;
