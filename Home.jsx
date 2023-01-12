import React from 'react';
import {Button, Row,Col, Card} from 'react-bootstrap';
import "./Home.css"
import { FaArrowRight, FaPlayCircle} from 'react-icons/fa'
import pic1 from "./watch.png"
import pic2 from "./content.png"
import pic3 from "./instructor.png"
import pic4 from "./quiz.png"
import pic5 from "./cert.png"
import Footer from '../Footer/Footer';



const Home = () => {
    return (
        <div>
            <div className="container">
                <h1 className='first'>
                    
                </h1>
                <h3 className='welcome'>
                    Welcome to the Learners
                </h3>
                <h1>
                    Best Online Education Expertise
                </h1>
                <h5 style={{color:"white",lineHeight:"50px",fontSize:"30px", marginTop:"30px"}}>
                Far far away, behind the word mountains, far from the 
               <br /> countries Vokalia and Consonantia, there live the blind texts.
                </h5>
                <div className='button'>
                <Button variant="success" style={{width:"200px",height:"50px"}}>Enroll Now <FaArrowRight/></Button>{' '}
      <Button variant="warning" style={{width:"200px",height:"50px"}}>View More <FaArrowRight /></Button>{' '}
      </div>
      <div className='learn'>
      <Row>
        <Col md={6}>
            <h4 style={{fontSize:"30px"}}>
            Welcome to the <span style={{color:'#67d5d5'}}>Learners</span>
            </h4 >
            <h1>
            We Are StudyLab An Online Learning Center
            </h1>
            <h5 style={{lineHeight:"40px"}} data-aos ="fade-up" data-duration="1500">
            A small river named Duden flows by their place and supplies it with the necessary regelialia. 
            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            Far far away, behind the word mountains, 
            far from the countries Vokalia and Consonantia, there live the blind texts. 
            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </h5>
            <div className='watch'>
                <img src={pic1} alt=""  style={{width:"150px"}}/>
                <Button variant="warning" style={{height:"60px", marginTop:"35px"}}>Watch Video<FaPlayCircle /></Button>
            </div>
        </Col>
        <Col md={6}>
            <Row>
                <Col md={6}>
                <Card style={{ width: '18rem',marginLeft:"30px" }}>
      <Card.Body>
        <img src={pic2} alt="" style={{width:'80px', marginBottom:"20px",backgroundColor:"#67d5d5"}} />
        <h2>Top Quality Content</h2>
   
     <Card.Text style={{lineHeight:"40px", marginBottom:"40px", fontSize:"20px"}}>
        A small river named Duden flows by their place and supplies
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', marginLeft:"30px" , marginTop:"30px" }}>
      <Card.Body>
        <img src={pic3} alt="" style={{width:'80px', marginBottom:"20px",backgroundColor:"#67d5d5"}} />
        <h2>High Skilled Instructors</h2>
   
     <Card.Text style={{lineHeight:"40px", marginBottom:"40px", fontSize:"20px"}}>
        A small river named Duden flows by their place and supplies
        </Card.Text>
       
      </Card.Body>
    </Card>

                </Col>
                <Col md={6}>
                <Card style={{ width: '18rem' }}>
      <Card.Body>
        <img src={pic4} alt="" style={{width:'80px', marginBottom:"20px",backgroundColor:"#67d5d5"}} />
        <h2>World Class Certifified Quiz</h2>
   
     <Card.Text style={{lineHeight:"40px", marginBottom:"40px", fontSize:"20px"}}>
        A small river named Duden flows by their place and supplies
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Row>
        <Col md={6}>
        <Card style={{ width: '18rem',marginTop:"30px"  }}>
      <Card.Body>
        <img src={pic5} alt="" style={{width:'80px', marginBottom:"20px",backgroundColor:"#67d5d5"}} />
        <h2>Get certified Today</h2>
   
     <Card.Text style={{lineHeight:"40px", marginBottom:"40px", fontSize:"20px"}}>
        A small river named Duden flows by their place and supplies
        </Card.Text>
       
      </Card.Body>
    </Card>
        </Col>
    </Row>

                </Col>
            </Row>
          

        
        </Col>
      </Row>
      </div>
   
            </div>
            <Footer />
        </div>
    );
}

export default Home;
