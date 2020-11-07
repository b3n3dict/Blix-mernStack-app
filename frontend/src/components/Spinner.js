import React from 'react';
import { Spinner } from 'reactstrap';


export default function Loader() {

  return (
    <div>
      <Spinner color="primary" style={{ width: '4rem', height: '4rem', marginLeft:'45%', marginTop:'20%'}} />{' '}  
    </div>
  );
}
