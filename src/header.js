import React, {Component} from 'react';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import { Button, Navbar,Nav } from 'react-bootstrap'
import MenuIcon from '@material-ui/icons/Menu';
import { ParallaxProvider, Parallax } from 'react-skrollr'
import logo from './logo.png'


class Header extends Component {

  render() {
   
      return (
       
      
          <Parallax
            data={{
              'data-center-center': 'opacity: 1;',
              'data-bottom-top': 'opacity: 0;'
            }}
          >
      <div  style={{ background: '#0c0c0c', height :"40px"}}>
         <Navbar >
        
          {/* <MenuIcon style={{ marginLeft:"0px",marginBottom:"10px", color:'white'}}/> */}
    <Navbar.Brand href="#home" style={{display: 'flex',color:'white',float:'right',height:'33px' }}>
      
    <img src={logo} style={{width:150, marginTop: -7}} /></Navbar.Brand>
    <Nav className="mr-auto ">
      <Nav.Link href="#home" style={{ color:'white',marginLeft:"100px",marginTop:"-10px" }}>PRODUCTS</Nav.Link>
      <Nav.Link href="#features" style={{ color:'white',marginLeft:"50px",marginTop:"-10px"}}>PURCHASE</Nav.Link>
      <Nav.Link href="#pricing" style={{ color:'white',marginLeft:"50px",marginTop:"-10px" }}>TECHNOLOGIES</Nav.Link>
      <Nav.Link href="#pricing" style={{ color:'white',marginLeft:"50px",marginTop:"-10px" }}>RESOURCES</Nav.Link>
      <Nav.Link href="#pricing" style={{ color:'white',marginLeft:"50px",marginTop:"-10px" }}>CONTACTS</Nav.Link>
    </Nav>

    <SearchIcon style={{ marginLeft:"160px",marginBottom:"10px", color:'white'}}/>
          <Badge style={{ marginLeft:"20px", color:'white',marginBottom:"6px"}} badgeContent={4} color="primary">
        <MailIcon />
      </Badge >
    </Navbar>

      </div>
      </Parallax>
       
   
      );
  }
}

export default Header;
