import React from 'react';
import {Row ,Col, Button, Form}  from 'react-bootstrap';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Footer from '../Footer/Footer';
import "./Contact.css"

const Contact = () => {
    const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
    return (
        <div>
            <div className="container">
                <div className="first">
                    
            
                </div>
                <h1 className='con'>
                    CONTACT US
                </h1>
                <div className="contact">
                <Row>
                    <Col md={6}>
                    <iframe src={map}></iframe>
                    </Col>
                    <Col md={6}>
                        <h1>
                            Contact Us
                        </h1>
                        <h5>
                            We are open for any enquiries, suggestions and contributions
                        </h5>
                        <div style={{marginTop:"30px"}}>
                       <Row>
                        <Col md={4}>
                            <h4>Address</h4>
                       <p> 198 West 21th Street, Suite 721 New York NY 10016</p>
                        </Col>
                        <Col md={4}>
                            <h4>Email</h4>
                       <p> onlinecourse.edu@gmail.com</p>
                        </Col> 
                        <Col md={4}>
                            <h4>Phone</h4>
                       <p> +233-555-0984</p>
                        </Col>
                       </Row>
                       </div>
                       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"style={{borderColor:" black"}}  />
        <Form.Label style={{marginTop:"30px"}}>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" style={{borderColor:" black"}} />
        <Form.Label style={{marginTop:"30px"}}>Subject</Form.Label>
        <Form.Control type="text" placeholder="Enter subject"style={{borderColor:" black"}}  />
        
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{marginTop:"30px"}}>Message</Form.Label>
        <Form.Control type="text" placeholder="" style={{height:"200px", borderColor:" black"}} />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <h3 style={{marginTop:"30px"}}>
                        Follow us here
                    </h3>
                    <div style={{display:"flex", color:"#67d5d5",columnGap:"50px",fontSize:"30px", cursor:"pointer"}}>
                   <p> <FaFacebook/></p>
                <p><FaInstagramSquare /></p>    
                     <p><FaLinkedin /></p>
                   <p><FaTwitter /></p> 
                    </div>
                    </Col>
                   
                </Row>
                
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
