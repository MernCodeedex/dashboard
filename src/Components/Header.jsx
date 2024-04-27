import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ borderBottom: "1px solid #b6b6b5" }}
      >
        <Row className="w-100 ms-5 d-flex">
          <Col lg={2}>
            <Navbar.Brand as={Link} to="/">
              <i
                style={{ color: "#e47010" }}
                className="fa-brands fa-phoenix-framework"
              ></i>
              <span
                style={{
                  color: "#5e5e5e",
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: "500",
                  fontSize: "23px",
                }}
              >
                {" "}
                phoenix
              </span>
            </Navbar.Brand>
          </Col>
          <Col lg={1}></Col>

          <Col lg={1}></Col>

          <Col lg={4} className="d-flex justify-content-end">
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              style={{ backgroundColor: "#dad5d5" }}
            />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Form inline className="mx-auto">
                <FormControl
                  type="text"
                  style={{
                    border: "1px solid #c1c0c0",
                    width: "300px",
                    borderRadius: "20px",
                    height: "35px",
                    maxWidth: "100%",
                  }}
                  placeholder="Search..."
                  className="mr-sm-2 searchbar"
                />
              </Form>

              <Col lg={8}></Col>
              <Col lg={5}></Col>

              <Nav className="ms-auto">
                <Nav.Link href="#">
                  {" "}
                  <WbSunnyOutlinedIcon style={{ color: "#ee9a33" }} />
                </Nav.Link>
                <Nav.Link href="#">
                  <i
                    style={{ color: "black" }}
                    className="fa-regular fa-bell"
                  ></i>
                </Nav.Link>

                <Nav.Link href="#">
                  <i
                    style={{ color: "black" }}
                    className="fa-solid fa-list-ul"
                  ></i>
                </Nav.Link>
                <Nav.Link href="#">
                  {" "}
                  <Avatar
                    style={{ marginTop: "-3px" }}
                    alt="User Avatar"
                    src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png"
                    sx={{ width: 32, height: 32 }}
                  />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Navbar>
    </div>
  );
};

export default Header;
