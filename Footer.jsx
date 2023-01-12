import React from 'react';
import { Col, Row , InputGroup, Form} from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import{GrLocation} from "react-icons/gr"
import{BiPhoneCall} from "react-icons/bi"
import{FiMail, FiSend} from "react-icons/fi"
import "./Footer.css"


const Footer = () => {
    return (
        <div>
            <div className='footer'>
            <Row>
                
                <Col md={3}>
                <div className='foot'>
                <h2>
                    The Learners
                </h2>
                <h3 style={{marginBottom:"30px"}}>
                    Online Education Center
                </h3>
                <h5 style={{lineHeight:'3rem'}}>
                Far far away, behind the word mountains, 
               <br /> far from the countries
                 Vokalia and <br />  Consonantia, there live the blind texts.
                </h5>
                <div className='media'>
                <FaFacebook/>
                <FaInstagram/>
                <FaLinkedin />
                <FaTwitter />

                </div>
                </div>
                </Col>
                
                <Col md={3}>
                    <div className='help'>
                    <h2 style={{marginBottom:"30px"}}>
                        Help Desk
                    </h2 >
                    
                    <h5 style={{marginBottom:"30px"}}>
                        Customer Care
                    </h5 >
                    <h5 style={{marginBottom:"30px"}} >
                        Legal Help
                    </h5>
                    <h5 style={{marginBottom:"30px"}}>
                        Services
                    </h5>
                    <h5>
                        Privacy Policy
                    </h5>
                    </div>
                    
                </Col>
                <Col md={3}>
                    <div className='recent'>
                
                    <h2 style={{marginBottom:"30px"}}>
                        Recent Courses
                    </h2>
                    <h5 style={{marginBottom:"30px"}}>
                        Computer Engineering
                    </h5>
                    <h5 style={{marginBottom:"30px"}}>
                        Web Design
                    </h5>
                    <h5 style={{marginBottom:"30px"}}>
                        Business Study
                    </h5>
                    <h5>
                        Web Developer
                    </h5>
                    </div>
                </Col>
                <Col md={3}>
                    
                    <h2 style={{marginBottom:"30px",marginTop:"30px"}}>
                        Have Questions
                    </h2>
                    <div className="questions">
                           <h5 style={{marginBottom:"30px"}}> <GrLocation /> Ssnit Pension House </h5>
                            <h5 style={{marginLeft:"30px", marginTop:"-30px", marginBottom:"30px"}}> 3rd floor , Accra, Ghana</h5>
                            <h5 style={{marginBottom:"30px"}}><BiPhoneCall/> +233 554-4234</h5>
                            <h5><FiMail/> learners@gmail.com</h5>
                        </div>
                        <div style={{marginTop:"40px"}}>
                        <h4>
                            Subscribe to our Newsletters
                        </h4>
                        <InputGroup className="mb-3" style={{width:'350px'}} >
        <Form.Control
          placeholder="Enter your email"
         
      />
        <InputGroup.Text id="basic-addon2"><FiSend /></InputGroup.Text>
      </InputGroup>
      </div>
                </Col>
            </Row>
            </div>
        </div>
    );
}

export default Footer;

