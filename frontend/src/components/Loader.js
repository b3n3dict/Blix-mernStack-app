
import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      variant="primary"
      style={{
        width: '100px',
        height: '100px',
        padding: '80px',
        margin: 'auto',
        marginTop:'80px',
        display: 'block',
      }}
    >
      <span className='sr-only'>Loading...</span>
    </Spinner>
  )
}

export default Loader