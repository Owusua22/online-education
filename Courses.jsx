import React from 'react';
import {Row ,Col, Button, Card, InputGroup, Form, ListGroup}  from 'react-bootstrap';
import { FiSearch} from 'react-icons/fi'
import pic1 from "./stul1.png"
import pic2 from "./stul3.png"
import pic3 from "./fstul4.png"
import pic4 from "./stul5.png"
import pic5 from "./stul6.png"
import pic6 from "./stul8.png"
import { FaArrowRight } from 'react-icons/fa';
import "./Courses.css"
import Footer from '../Footer/Footer';


const Courses = () => {
    return (
        <div>
            <div className="container">
                <div className="first">

                </div>
                <h1 className='explore'>
                EXPLORE OUR COURSES
                </h1>
                <div className="offer">
                    <Row>
                        <Col md={2}>

                        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search.."
       
        />
        <InputGroup.Text id="basic-addon2">< FiSearch/></InputGroup.Text>
      </InputGroup>
      
      <br />
      <h3>
        Course Category
      </h3>
      <div className='design'>
      <Form>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Design & Illustration`}
          />
         </div>
         
      ))}
         {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Web Devlopment`}
          />
         </div>
         
      ))}
         {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Programming`}
          />
         </div>
         
      ))}
         {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Music`}
          />
         </div>
         
      ))}
         {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Photography`}
          />
         </div>
         
      ))}
    </Form>
    </div>
    <br />
    <h3>
        Course Instructor
    </h3>
    <Form>

    {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Ronaldo Doe`}
          />
         </div>
         
      ))}
          {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Tony Griffen`}
          />
         </div>
         
      ))}
          {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Ben Howard`}
          />
         </div>
         
      ))}
          {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`John Dee`}
          />
         </div>
         
      ))}
          {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Harry Potter`}
          />
         </div>
         
      ))}
    </Form>
    <br />
    <h3>
        Course Type
    </h3>
    <Form>
    {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Basic`}
          />
         </div>
         
      ))}
        {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Intermidiate`}
          />
         </div>
         
      ))}
        {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Advance`}
          />
         </div>
         
      ))}
    </Form>
    <br />
    <h3>
        Software
    </h3>
    <Form>
    {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Adobe Photoshop`}
          />
         </div>
         
      ))}
          {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Sketch`}
          />
         </div>
         
      ))}
          {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Word Press`}
          />
         </div>
         
      ))}
          {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Html & Css`}
          />
         </div>
         
      ))}
    </Form>

                        </Col>
                        <Col md={5}>
                       < Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={pic1} />
      <Card.Body>
        <Card.Title style={{fontWeight:"700", textAlign:"center",fontSize:"40px", color:'#67d5d5'}}>Software Design</Card.Title>
        
      </Card.Body>
      <ListGroup className="list-group-flush" style={{textAlign:"center",fontSize:"25px"}}>
        <ListGroup.Item>Instructor: Tony Garreth</ListGroup.Item>
        <ListGroup.Item>$ 200.00 </ListGroup.Item>
       
      </ListGroup>
     
    </Card>
    < Card style={{ width: '30rem', marginTop:"30px" }}>
      <Card.Img variant="top" src={pic3}  />
      <Card.Body>
        <Card.Title style={{fontWeight:"700", textAlign:"center",fontSize:"40px", color:'#67d5d5'}}>Geography</Card.Title>
        
      </Card.Body>
      <ListGroup className="list-group-flush" style={{textAlign:"center",fontSize:"25px"}}>
        <ListGroup.Item>Instructor: Tony Garreth</ListGroup.Item>
        <ListGroup.Item>$ 200.00 </ListGroup.Item>
       
      </ListGroup>
     
    </Card>
    < Card style={{ width: '30rem', marginTop:"30px" }}>
      <Card.Img variant="top" src={pic2} />
      <Card.Body>
        <Card.Title style={{fontWeight:"700", textAlign:"center",fontSize:"40px", color:'#67d5d5'}}>French</Card.Title>
        
      </Card.Body>
      <ListGroup className="list-group-flush" style={{textAlign:"center",fontSize:"25px"}}>
        <ListGroup.Item>Instructor: Serina Andrews</ListGroup.Item>
        <ListGroup.Item>$ 300.00 </ListGroup.Item>
       
      </ListGroup>
     
    </Card>
                        </Col>
                       
                        <Col md={5}>
                        < Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={pic4} />
      <Card.Body>
        <Card.Title style={{fontWeight:"700", textAlign:"center",fontSize:"40px", color:'#67d5d5'}}>Photoshop</Card.Title>
        
      </Card.Body>
      <ListGroup className="list-group-flush" style={{textAlign:"center",fontSize:"25px"}}>
        <ListGroup.Item>Instructor: Joshua Claude</ListGroup.Item>
        <ListGroup.Item>$ 100.00 </ListGroup.Item>
       
      </ListGroup>
     
    </Card>
                        <div>
                        
                        
                        < Card style={{ width: '30rem', marginTop:"30px" }}>
      <Card.Img variant="top" src={pic5} />
      <Card.Body>
        <Card.Title style={{fontWeight:"700", textAlign:"center",fontSize:"40px", color:'#67d5d5'}}>Communication</Card.Title>
        
      </Card.Body>
      <ListGroup className="list-group-flush" style={{textAlign:"center",fontSize:"25px"}}>
        <ListGroup.Item>Instructor: John Williams</ListGroup.Item>
        <ListGroup.Item>$ 3500.00 </ListGroup.Item>
       
      </ListGroup>
     
    </Card>
    </div>
    < Card style={{ width: '30rem', marginTop:"30px"}}>
      <Card.Img variant="top" src={pic6} />
      <Card.Body>
        <Card.Title style={{fontWeight:"700", textAlign:"center",fontSize:"40px", color:'#67d5d5'}}>Economics</Card.Title>
        
      </Card.Body>
      <ListGroup className="list-group-flush" style={{textAlign:"center",fontSize:"25px"}}>
        <ListGroup.Item>Instructor: Williams Doe</ListGroup.Item>
        <ListGroup.Item>$ 300.00 </ListGroup.Item>
       
      </ListGroup>
     
    </Card>
                        </Col>
                    </Row>

                </div>
                <Button variant="primary" style={{marginLeft:"750px", marginTop:"50px"}}>Next Page <FaArrowRight/></Button>{' '}
            </div>
            <Footer />
        </div>
    );
}

export default Courses;
