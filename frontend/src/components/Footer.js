import React, { useState } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";
import SendIcon from '@material-ui/icons/Send';
import Message from "./Message";
import { Link } from "react-router-dom";

const FooterPage = () => {
 const [email, setEmail] = useState(false)
 const [value, setValue] = useState('')
  const emailSubmit =(e)=> {
    e.preventDefault()
    setEmail(true)
    setValue('')
  }
  setTimeout(()=>{
      setEmail(false)
  },8000)
  return (

    <MDBFooter color="blue" className="font-small footer pt-4 mt-4 neu__footer">
    {email && <Message  severity="success">Email Sent. We will contact you with in two days</Message> } 
      <MDBContainer fluid className="text-center text-md-left mt-4 ">
        <MDBRow className="mdRow">
          <MDBCol md="3">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          
          <MDBCol md="3">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="3">
          <div class="input-group">
    <form style={{display:"flex"}} onSubmit={emailSubmit} >
      <input type="email" required  className="inFt"placeholder="Email Address" onChange={(e)=>setValue(e.target.value)} value={value}/>
      <button className="ftb unit" type="submit" ><SendIcon/></button>
    </form>
    
  </div>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <Link to="#!">Link 1  </Link>
              </li>
              <li className="list-unstyled">
                <Link to="#!">Link 2 </Link>
              </li>
              <li className="list-unstyled">
                <Link to="#!">Link 3 </Link>
              </li>
              <li className="list-unstyled">
                <Link to="#!">Link 4 </Link>
              </li>
            </ul>
          </MDBCol>
       
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Krent
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
