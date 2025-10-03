"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
import Image from "next/image";
import logo from "@/assets/Sharp-Logo.png";

export default function Headernav() {
  const headerRef = useRef(null);
  const nameInputRef = useRef(null);
  const router = useRouter();

  const [condition, setCondition] = useState(true);
  const [show, setShow] = useState(false);
  const [showTech, setShowTech] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);

  const onSkipMainContent = (event) => {
    if (event.key === "Enter") {
      const mainContent = document.getElementById("main-content");
      if (mainContent) mainContent.focus();
    }
  };

  const toggleNavBar = () => setNavExpanded((prev) => !prev);
  const showDropdown = () => {
    setShow(true);
    setShowTech(false);
  };
  const hideDropdown = () => setShow(false);

  const showDropdownTech = () => {
    setShowTech(true);
    setShow(false);
  };
  const hideDropdownTech = () => setShowTech(false);

  const toggleSlider = () => {
    if (condition && nameInputRef.current) {
      nameInputRef.current.focus();
    }
    setCondition((prev) => !prev);
  };

  const hideAll = () => {
    hideDropdown();
    hideDropdownTech();
  };

  const selectNavigate = (route) => {
    if (headerRef.current) headerRef.current.focus();
    setNavExpanded(false);
    router.push(route); // ✅ Next.js navigation
  };

  const search = (event) => {
    event.preventDefault();
    toggleSlider();
    if (headerRef.current) headerRef.current.focus();
    const searchq = nameInputRef.current?.value || "";
    if (nameInputRef.current) nameInputRef.current.value = "";
    router.push(`/search-result/${encodeURIComponent(searchq)}`);
  };

  return (
    <div role="navigation" style={{ background: "#0c0c0c" }}>
      <Navbar
        expanded={navExpanded}
        expand="lg"
        bg="black"
        variant="dark"
        className="bg-black"
      >
        <Container fluid>
          {/* Logo */}
          <Navbar.Brand ref={headerRef} href="/">
            <Image alt="SHARP Logo" src={logo} width={120} height={40} />
          </Navbar.Brand>

          {/* Skip to main content button (accessibility) */}
          <Button
            onKeyDown={onSkipMainContent}
            onClick={(e) => e.preventDefault()}
            className="skip-main"
            aria-label="Skip to main content"
          >
            Skip to main content
          </Button>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={toggleNavBar}
          />
          <Navbar.Collapse id="basic-navbar-nav" style={{ color: "white" }}>
            <Nav className="ms-auto">
              {/* Products Dropdown */}
              <NavDropdown
                title="Products"
                show={show}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
                onClick={showDropdown}
                onKeyDown={showDropdown}
                onFocus={hideDropdownTech}
              >
                <NavDropdown.Item className="no-drop-color fw-bold">
                  Memory in Pixel LCDs
                  <NavDropdown.Item
                    className="drop-color"
                    onClick={() => selectNavigate("/MemoryInPixel")}
                  >
                    Overview
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="drop-color"
                    onClick={() =>
                      selectNavigate("/memory-in-pixel-lcds-product")
                    }
                  >
                    Find a Product
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="drop-color"
                    onClick={() =>
                      selectNavigate("/memory-in-pixel-lcds-technology")
                    }
                  >
                    Technology
                  </NavDropdown.Item>
                </NavDropdown.Item>

                <NavDropdown.Item className="no-drop-color fw-bold">
                  ePoster Display Modules
                  <NavDropdown.Item
                    className="drop-color"
                    onClick={() => selectNavigate("/eposters-displays")}
                  >
                    Overview
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="drop-color"
                    onClick={() => selectNavigate("/Eposters_product")}
                  >
                    Find a Product
                  </NavDropdown.Item>
                </NavDropdown.Item>

                <NavDropdown.Item className="no-drop-color fw-bold">
                  General Purpose LCDs
                  <NavDropdown.Item
                    className="drop-color"
                    onClick={() => selectNavigate("/industrial-lcds-product")}
                  >
                    Find a Product
                  </NavDropdown.Item>
                </NavDropdown.Item>
              </NavDropdown>

              {/* Other Links */}
              <Nav.Link
                onFocus={hideAll}
                onClick={() => selectNavigate("/about")}
              >
                About
              </Nav.Link>
              <Nav.Link
                onFocus={hideAll}
                onClick={() => selectNavigate("/news")}
              >
                News
              </Nav.Link>
              <Nav.Link
                onFocus={hideAll}
                onClick={() => selectNavigate("/contact")}
              >
                Contact
              </Nav.Link>
            </Nav>

            {/* Search Form */}
            <Form className="headerSearch d-flex" onSubmit={search}>
              <FormControl
                id="searchId"
                type="text"
                placeholder="Search"
                ref={nameInputRef}
                className={condition ? "me-2 search" : "me-2 search expanded"}
                tabIndex={-1}
              />
              <Button
                aria-label="toggle-search"
                className="bg-black search-icon"
                onClick={toggleSlider}
              >
                <SearchIcon />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
