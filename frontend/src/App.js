import React from 'react';
import {Container,Button} from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';

const App=()=> {
  return (
    <> 
    <Header/>
     <main className="py-2">
     <Container>
     <h1>Welcome to Krent</h1>
     
     </Container>
     
     </main>
     <Footer/>
       
    </>
  );
}

export default App;
