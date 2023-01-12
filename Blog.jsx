import React from 'react';
import {Row ,Col, Button, Card} from 'react-bootstrap';
import pic1 from "./bl1.png"
import pic2 from "./bl2.png"
import pic3 from "./bl3.png"
import pic4 from "./bl4.png"
import pic5 from "./bl5.png"
import pic6 from "./bl6.png"
import { FaCalendarAlt, FaUserAlt, FaArrowRight } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import "./Blog.css"
import Footer from '../Footer/Footer';


const Blog = () => {
    return (
        <div>
            <div className="container">
                <div className="first">

                </div>
                <h1 className='let'>OUR BLOG</h1>
                <h1 style={{textAlign:"center", marginBottom:"40px", color:"#67d5d5",fontWeight:"900", fontSize:"50px", marginTop:"350px"}}>
                    OUR NEWSLETTERS
                </h1>
                <div className="blog">
                    <Row>
                        <Col md={4}>
                        <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={pic1} />
      <Card.Body>
        <Card.Title style={{color:'67d5d5', textAlign:"center", display:"flex",columnGap:"15px"}}><FaCalendarAlt/> Sep. 17,2022 <FaUserAlt/> Admin <FiMessageCircle/> 3</Card.Title>
        <h1>Creativity At its' Best</h1>
        <Card.Text>
          <h6>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...
          </h6>
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
                        
                        </Col>
                        <Col md={4}>
                        <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={pic2} />
      <Card.Body>
        <Card.Title style={{color:'67d5d5', textAlign:"center", display:"flex",columnGap:"15px"}}><FaCalendarAlt/> Sep. 1,2022 <FaUserAlt/> Admin <FiMessageCircle/> 10</Card.Title>
        <h1>New Courses Available</h1>
        <Card.Text>
          <h6>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...
          </h6>
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
                        
                        </Col>
                        <Col md={4}>
                        <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={pic3} />
      <Card.Body>
        <Card.Title style={{color:'67d5d5', textAlign:"center", display:"flex",columnGap:"15px"}}><FaCalendarAlt/> Aug. 27,2022 <FaUserAlt/> Admin <FiMessageCircle/> 5</Card.Title>
        <h1>Welcome to School</h1>
        <Card.Text>
          <h6>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...
          </h6>
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
                        
                        </Col>
                    </Row>
                    <div style={{marginTop:'40px'}}>
                    <Row>
                        
                        <Col md={4}>
                        <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={pic4} />
      <Card.Body>
        <Card.Title style={{color:'67d5d5', textAlign:"center", display:"flex",columnGap:"15px"}}><FaCalendarAlt/> April. 11,2022 <FaUserAlt/> Admin <FiMessageCircle/> 113</Card.Title>
        <h1>Donations </h1>
        <Card.Text>
          <h6>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...
          </h6>
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
                        
                        
                        </Col>
                        <Col md={4}>
                        <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={pic5} />
      <Card.Body>
        <Card.Title style={{color:'67d5d5', textAlign:"center", display:"flex",columnGap:"15px"}}><FaCalendarAlt/> Jan. 31,2022 <FaUserAlt/> Admin <FiMessageCircle/> 9</Card.Title>
        <h1>Admissions Ongoing</h1>
        <Card.Text>
          <h6>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...
          </h6>
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
                        
                        
                        </Col>
                        <Col md={4}>
                        <Card style={{ width: '30rem' }}>
      <Card.Img variant="top" src={pic6} />
      <Card.Body>
        <Card.Title style={{color:'67d5d5', textAlign:"center", display:"flex",columnGap:"15px"}}><FaCalendarAlt/> Feb. 10,2022 <FaUserAlt/> Admin <FiMessageCircle/> 50</Card.Title>
        <h1>2021 Ceremony</h1>
        <Card.Text>
          <h6>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...
          </h6>
        </Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
                        
                        
                        </Col>
                    </Row>
                    </div>
                    <Button variant="success" style={{marginLeft:"650px", marginTop:"50px",width:"200px"}}>Next Page <FaArrowRight/></Button>{' '}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Blog;
