import React from 'react';
import {Row ,Col, Button, Card} from 'react-bootstrap';
import pic1 from "./lap.png"
import pic2 from "./stu.png"
import pic3 from "./licon.png"
import pic4 from "./instructor.png"
import pic5 from "./sch.png"
import pic6 from "./lady.png"
import pic7 from "./ex1.png"
import pic8 from "./exe2.png"
import pic9 from "./exe3.png"
import "./About.css"
import Footer from '../Footer/Footer';



const About = () => {
    return (
        <div>
            <div className="container">
                <h1 className="first">
                    
                </h1>
                <h1 className='about'>
                    ABOUT US
                </h1>
                <div className='skills'>
                <Row>
                    <Col md={6}>
                    <div>
                        <img src={pic1} alt="" />
                    </div>
                    </Col>
                    <Col md={6}>
                        <h4>
                            Enhanced Skills
                        </h4>
                        <h1>
                            LEARN ANYTHING YOU WANT TODAY
                        </h1>
                        <h5>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, 
                        a large language ocean. 
                        A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </h5>
                        <p className='get'>
                        <Button variant="warning">Get in Touch Today</Button>{' '}
                        </p>
                    </Col>
                </Row>
                </div>
                </div>
                <div className='sub'>
                <Row>
                    <Col md={3}>
                    <img src={pic2} alt="" style={{width:"70px", marginTop:"30px", marginLeft:"100px"}} />
                    <p style={{marginLeft:"99px"}}>
                        4,500 
                       <br /> students 
                    </p>
                    </Col>
                    <Col md={3}>
                    <img src={pic3} alt="" style={{width:"70px", marginTop:"30px", marginLeft:"20px"}} />
                    <p>
                        Over 50
                        <br /> courses
                    </p>
                    </Col>
                    <Col md={3}>
                    <img src={pic4} alt="" style={{width:"70px", marginTop:"30px",marginLeft:"20px"}} />
                    <p>
                        Over 150
                        <br />Instructors
                    </p>
                    </Col>
                    <Col md={3}>
                    <img src={pic5} alt="" style={{width:"70px", marginTop:"30px", marginLeft:"20px"}} />
                    <p>
                        3 hours
                        <br />Content

                    </p>
                    </Col>
                </Row>
                </div>
                <div className=" test">
                    <Row>
                        <Col md={6}>
                            <h4>
                                Testimonials
                            </h4>
                            <h1>
                                What the Students Say About us
                            </h1>
                        
                        </Col>
                        <Col md ={6}>
                        <img src ={pic6} alt="" />
                        </Col>
                    </Row>
                    <div className="testimonial">
                    <Row>
                        <Col md ={4}>
                        <Card style={{ width: '25rem' }}>
      <Card.Body>
        
        <Card.Subtitle className="mb-2 text-muted">⭐ ⭐ ⭐ ⭐ ⭐</Card.Subtitle>
        <Card.Text>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                        there live the blind texts. 
        </Card.Text>
        <h5>
        <img src={pic7} alt="" style={{width:"90px", borderRadius:"60%",height:"80px"}}/> Mr. Samuel Ade
        </h5> 
      </Card.Body>
    </Card>
                        </Col>
                        <Col md ={4}>
                        
                        <Card style={{ width: '25rem' }}>
      <Card.Body>
        
        <Card.Subtitle className="mb-2 text-muted">⭐ ⭐ ⭐ ⭐ ⭐</Card.Subtitle>
        <Card.Text>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                        there live the blind texts. 
        </Card.Text>
        <h5>
        <img src={pic8} alt="" style={{width:"90px", borderRadius:"60%",height:"80px"}}/> Miss Abi Doe
        </h5> 
      </Card.Body>
    </Card>
                        </Col>
                        
                        <Col md ={4}>
                        
                        <Card style={{ width: '25rem' }}>
      <Card.Body>
        
        <Card.Subtitle className="mb-2 text-muted">⭐ ⭐ ⭐ ⭐ ⭐</Card.Subtitle>
        <Card.Text>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                        there live the blind texts. 
        </Card.Text>
        <h5>
        <img src={pic9} alt="" style={{width:"90px", borderRadius:"60%",height:"80px"}}/> Mr.Evans Yaw
        </h5> 
      </Card.Body>
    </Card>
                        </Col>
                    
                    </Row>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default About;
