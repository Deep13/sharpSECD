import React, {Component} from 'react';
import {Jumbotron,Container,Image,Card,Button} from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive'
import netflix from './netflix.png'


class Transparent extends Component {

  render() {
      return (
      <div style={{display:'flex',backgroundColor:'black'}}>
          
          <Card style={{ marginLeft:'80px',width: '30rem',height:"700px",backgroundColor:'black' }}>
  
              <Card.Body style={{marginTop:'160px'}}>
                        <Button variant="link" size="m" style={{display:'flex',color:'White',textAlign: "left"}}>Contact your local Sharp Representative </Button>
                        <h1 style={{color:'White'}}>Your Perfect Display Solution? Find it Here.</h1>
                        <Button variant="outline-dark"size="lg" style={{color:'White'}}>Where to buy</Button>
                        <Button variant="outline-dark" size="lg"  style={{marginLeft:'10px',color:'White'}}>Contact Us</Button>
              </Card.Body>
  
          </Card>
          <Jumbotron  style={{ display:'flex',backgroundColor:'black', marginLeft:"0px",height:"680px", width:"1200px", backgroundRepeat:"no-repeat" }}>
             <img src={netflix} style={{ display:'flex'}}/>
          </Jumbotron>
          
      </div>
      );
  }
}

export default Transparent;
