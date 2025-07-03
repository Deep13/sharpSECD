import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import logo from "./assets/Sharp-Logo.png";
class Headernav extends Component {
  constructor(props) {
    super(props);
    this.header = React.createRef();
    this.state = {
      condition: true,
      show: false,
      showTech: false,
      navExpanded: false,
    };
  }

  onSkipMainContent = (event) => {
    if (event.key === "Enter") document.getElementById("main-content").focus();
  };
  ToggleNavBar = () => {
    this.setState({ navExpanded: !this.state.navExpanded });
  };
  showDropdown = (e) => {
    this.setState({ show: true, showTech: false });
  };
  hideDropdown = (e) => {
    this.setState({ show: false });
  };
  showDropdownTech = (e) => {
    this.setState({ showTech: true, show: false });
  };
  hideDropdownTech = (e) => {
    this.setState({ showTech: false });
  };
  toggleSlider = () => {
    if (this.state.condition) {
      this.nameInput.focus();
    }
    this.setState({ condition: !this.state.condition });
  };
  hideAll = () => {
    this.hideDropdown();
    this.hideDropdownTech();
  };
  selectNavigate = (route) => {
    this.header.current.focus();
    this.setState({ navExpanded: false });
    window.location.href = "#" + route;
  };
  search = (event) => {
    event.preventDefault();
    // debugger;
    this.toggleSlider();
    this.header.current.focus();
    var searchq = document.getElementById("searchId").value;
    document.getElementById("searchId").value = "";
    // this.setState({ navExpanded: false });
    window.location.href = "#/search-result/" + searchq;
  };

  render() {
    return (
      <div role="navigation" style={{ background: "#0c0c0c" }}>
        <Navbar
          expanded={this.state.navExpanded}
          className="bg-black"
          variant="dark"
          expand="lg"
        >
          <Navbar.Brand ref={this.header} href="/">
            <img alt="SHARP Logo" src={logo} style={{ width: 120 }} />
          </Navbar.Brand>
          <Button
            onKeyDown={this.onSkipMainContent}
            onClick={(e) => e.preventDefault()}
            className="skip-main"
            aria-label="Skip to main content"
          >
            Skip to main content
          </Button>
          <Navbar.Toggle
            onClick={this.ToggleNavBar}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse style={{ color: "white" }}>
            <Nav className="ml-auto">
              <NavDropdown
                show={this.state.show}
                onMouseEnter={this.showDropdown}
                onMouseLeave={this.hideDropdown}
                onClick={this.showDropdown}
                onKeyDown={this.showDropdown}
                onFocus={this.hideDropdownTech}
                title="Products"
              >
                <NavDropdown.Item
                  className="no-drop-color"
                  style={{ fontWeight: "bold" }}
                >
                  Memory in Pixel LCDs
                  <NavDropdown.Item
                    className="drop-color"
                    onClick={() => this.selectNavigate("/MemoryInPixel")}
                  >
                    Overview
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="drop-color"
                    onClick={() => this.selectNavigate("/memory-in-pixel-lcds-product")}
                  >
                    Find a Product
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="drop-color"
                    onClick={() => this.selectNavigate("/memory-in-pixel-lcds-technology")}
                  >
                    Technology
                  </NavDropdown.Item>
                </NavDropdown.Item>
                {/* <NavDropdown.Item className="dropdown-toggle" id="more-services" >
                  Memory in Pixel LCDs
                  <ul className="dropdown-menu second-level">
                    <li><a className="dropdown-item" href="#" onClick={() => this.selectNavigate("/MemoryInPixel")}>Overview</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => this.selectNavigate("/memory-in-pixel-lcds-product")}>Find a Product</a></li>
                    <li><a className="dropdown-item" href="#" onClick={() => this.selectNavigate("/memory-in-pixel-lcds-technology")}>Technology</a></li>
                  </ul>
                </NavDropdown.Item> */}
                <NavDropdown.Item
                  className="no-drop-color"
                  style={{ fontWeight: "bold" }}
                >
                  ePoster Display Modules
                  <NavDropdown.Item
                    className="drop-color"
                    onClick={() => this.selectNavigate("/eposters-displays")}
                  >
                    Overview
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="drop-color"
                    onClick={() => this.selectNavigate("/Eposters_product")}
                  >
                    Find a Product
                  </NavDropdown.Item>
                </NavDropdown.Item>
                {/* <NavDropdown.Item className="dropdown-toggle" id="more-services">
                  ePoster Display Modules
                  <ul className="dropdown-menu second-level drop-two">
                    <li><a className="dropdown-item" href="#" onClick={() => this.selectNavigate("/eposters-displays")}>Overview</a></li>
                  </ul>
                </NavDropdown.Item> */}
                <NavDropdown.Item
                  className="no-drop-color"
                  style={{ fontWeight: "bold" }}
                >
                  General Purpose LCDs
                  <NavDropdown.Item
                    className="drop-color"
                    onClick={() => this.selectNavigate("/industrial-lcds-product")}
                  >
                    Find a Product
                  </NavDropdown.Item>
                </NavDropdown.Item>
                {/* <NavDropdown.Item className="dropdown-toggle" id="more-services">
                  General Purpose LCDs
                  <ul className="dropdown-menu second-level drop-three">
                    <li><a className="dropdown-item" href="#" onClick={() => this.selectNavigate("/industrial-lcds-product")}>Find a Product</a></li>
                  </ul>
                </NavDropdown.Item> */}


              </NavDropdown>
              <Nav.Link
                onFocus={this.hideAll}
                onClick={() => this.selectNavigate("/about")}
              >
                About
              </Nav.Link>
              <Nav.Link
                onFocus={this.hideAll}
                onClick={() => this.selectNavigate("/news")}
              >
                News
              </Nav.Link>
              <Nav.Link
                onFocus={this.hideAll}
                onClick={() => this.selectNavigate("/contact")}
              >
                Contact
              </Nav.Link>
            </Nav>
            <Form className="headerSearch" inline onSubmit={this.search}>
              <FormControl
                tabIndex={-1}
                variant="outline-danger"
                ref={(input) => {
                  this.nameInput = input;
                }}
                id="searchId"
                type="text"
                placeholder="Search"
                className={
                  this.state.condition
                    ? "mr-sm-2 search"
                    : "mr-sm-2 search expanded"
                }
              />
              <Button
                aria-label="toggle-search"
                className="bg-black search-icon"
                onClick={this.toggleSlider}
              >
                <SearchIcon />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Headernav;
