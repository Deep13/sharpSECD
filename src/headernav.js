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
                  onClick={() => this.selectNavigate("/MemoryInPixel")}
                >
                  Memory in Pixel LCDs
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => this.selectNavigate("/ReflectiveIGZO")}
                >
                  Reflective IGZO Displays
                </NavDropdown.Item>
                {/* <NavDropdown.Item
                  onClick={() =>
                    this.selectNavigate("/igzo-8k-displays-product")
                  }
                >
                  IGZO 8K Displays
                </NavDropdown.Item> */}
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item
                  onClick={() =>
                    this.selectNavigate("/industrial-lcds-product")
                  }
                >
                  Industrial LCDs
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    this.selectNavigate("/custom-camera-modules-product")
                  }
                >
                  Custom Camera Modules
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    this.selectNavigate("/LowPowerDisplays")
                  }
                >
                  Low Power LCD's
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                show={this.state.showTech}
                onMouseEnter={this.showDropdownTech}
                onMouseLeave={this.hideDropdownTech}
                onClick={this.showDropdownTech}
                onFocus={this.hideDropdown}
                title="Technologies"
              >
                <NavDropdown.Item
                  onClick={() =>
                    this.selectNavigate("/memory-in-pixel-lcds-technology")
                  }
                >
                  Memory in Pixel
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    this.selectNavigate("/reflective-igzo-technology")
                  }
                >
                  Reflective IGZO
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => this.selectNavigate("/igzo-technology")}
                >
                  IGZO
                </NavDropdown.Item>
              </NavDropdown>
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
