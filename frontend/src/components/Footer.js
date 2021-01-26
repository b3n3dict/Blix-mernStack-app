import React, { useState } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";
import SendIcon from "@material-ui/icons/Send";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Message from "./Message";
import { Link } from "react-router-dom";

const FooterPage = () => {
  const [email, setEmail] = useState(false);
  const [value, setValue] = useState("");
  const emailSubmit = (e) => {
    e.preventDefault();
    setEmail(true);
    setValue("");
  };
  setTimeout(() => {
    setEmail(false);
  }, 8000);
  return (
    <MDBFooter color="blue" className="font-small footer pt-4 mt-5 neu__footer">
      {email && (
        <Message severity="success">
          Email Sent. We will contact you with in two days
        </Message>
      )}
      <MDBContainer fluid className="text-center text-md-left mt-4 ">
        <MDBRow className="mdRow">
          <MDBCol md="2" >
            <h1 style={{padding:0,color:"#2460A7FF"}}>Krent</h1>
            <h4>
             Connect.
             Bond.Grow
            </h4>
          </MDBCol>
          <MDBCol md="2">
          <h5 style={{color:"#707070"}}>ABOUT</h5>
          <div className="footerList">
            <ul>
              <li className="list-unstyled">
                <Link to="#!">Contact Us</Link>
              </li>
              <li className="list-unstyled">
                <Link to="#!">About Us</Link>
              </li>
              <li className="list-unstyled">
                <Link to="#!">Careeres</Link>
              </li>
            
            </ul>
            </div>
          </MDBCol>
          <MDBCol md="2">
          <h5 style={{color:"#707070"}}>HELP</h5>
          <div className="footerList">
            <ul>
              <li className="list-unstyled">
                <Link to="#!">Payments</Link>
              </li>
              <li className="list-unstyled">
                <Link to="#!">Shipping</Link>
              </li>
              <li className="list-unstyled">
                <Link to="#!">FAQ</Link>
              </li>
           
            </ul>
            </div>
          </MDBCol>
          <MDBCol md="2">
          <h5 style={{color:"#707070"}}>POLICY</h5>
          <div className="footerList">
            <ul>
              <li className="list-unstyled">
                <Link to="#!">Return Policy</Link>
              </li>
              <li className="list-unstyled">
                <Link to="#!">Security</Link>
              </li>
              <li className="list-unstyled">
                <Link to="#!">Terms of Use</Link>
              </li>
           
            </ul>
            </div>
          </MDBCol>
          <MDBCol md="4" className="lastDiv" >
          <div className="input-group">
              <h5 style={{textAlign:"center",paddingLeft:"50px"}}>Stay In Touch</h5>
              <form style={{ display: "flex",paddingTop:"27px" }} onSubmit={emailSubmit}>
                <input
                  type="email"
                  required
                  className="inFt"
                  placeholder="Email Address"
                  onChange={(e) => setValue(e.target.value)}
                  value={value}
                />
                <button className="ftb unit" type="submit">
                  <SendIcon />
                </button>
              </form>
            </div>
            <div className="socialLink">
            <ul>
              <li className="list-unstyled">
                <Link to="#!"><InstagramIcon fontSize="large"/></Link>
              </li>
              <li className="list-unstyled">
                <Link to="#!"><FacebookIcon fontSize="large"/> </Link>
              </li>
              <li className="list-unstyled">
                <Link to="#!"><TwitterIcon fontSize="large"/></Link>
              </li>
              <li className="list-unstyled">
                <Link to="#!"><WhatsAppIcon fontSize="large"/> </Link>
              </li>
            </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
      <div className="footer-copyright text-center py-3">
      <hr
        style={{
            color: "white",
            backgroundColor: "white",
            height: 2,
            margin: "0 50px"

        }}
    />
        <MDBContainer fluid style={{marginTop:"10px"}}>
          &copy; 2020-{new Date().getFullYear()} Copyright: Krent
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
