<<<<<<< HEAD
import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Container} from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
const App=()=> {
  return (
    <Router>
    <Header/>
     <main className="py-2">
     <Container>
     <Route path="/" component={HomeScreen} exact/> 
     <Route path="/product/:id" component={ProductScreen} /> 
     <Route path="/cart/:id?" component={CartScreen} />
     </Container>
     
     </main>
     <Footer/>

=======
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import NotFound from "./components/NotFound";
const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-2 mt-5 pt-5">
        <Container>
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductScreen} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </main>
      <Footer />
>>>>>>> 596383b010c4994693eeb873f44739a5abaa4a51
    </Router>
  );
};

export default App;
