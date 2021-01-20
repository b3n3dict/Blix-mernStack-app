import React,{useState} from 'react'
import {Form} from 'react-bootstrap'
const Search = ({history}) => {
  const [keyword,setKeyword] = useState('')
  const submitHandler =(e)=>{
    e.preventDefault()
    if(keyword.trim()){
         history.push(`/search/${keyword}`)
    }else{
      history.push('/')
    }
  }
  return (
    <Form onSubmit={submitHandler} inline>
       <div className="CardInner">
      
      <div className="Icontainer">
      
        <div className="InputContainer">
          <input placeholder="Search Products" className="search" onChange={(e)=>setKeyword(e.target.value)}/>
           
        </div>
          <div className="Icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </div>
      </div>
     </div>
    </Form>
  )
}

export default Search
