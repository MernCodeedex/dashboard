import React from "react";
import Header from "../Components/Header";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Orders.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
//table
import EnhancedTable from "../Components/EnhancedTableView";
import { TextField, colors } from "@mui/material";
import { FaFileExport } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";

function createData(id, name, calories, fat, carbs, protein) {
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

const rows = [
  createData(4, "Frozen yoghurt", 159, 6.0, 24, 4.0), // Only Frozen yoghurt row
];

function Orders() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Row>
        <Col lg={2}>
          <Header />
        </Col>
        <Col
          className="ms-2"
          style={{
            backgroundColor: "#f6f8fb",
            borderLeft: "1px solid #b6b6b5",
          }}
        >
          <Row>
            <Col className="addpd" md={4} style={{ marginTop: "5%" }}>
              <h3 className="ms-5 mt-5 text-black addpd">
                <b>Orders</b>
              </h3>
            </Col>
          </Row>
          <Row>
            <Col md={8} className="mt-4 ms-5">
              <Row className="justify-content-center flex-wrap">
                <Col xs={6} sm={4} md={2} className="mb-2">
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#424242",
                      fontSize: "13px",
                    }}
                  >
                    <span style={{ fontWeight: "500" }}>All </span>(68898)
                  </Link>
                </Col>
                <Col xs={6} sm={4} md={2} className="mb-2">
                  <Link className="ulink">
                    <span style={{ fontWeight: "500" }}>PendingPayment</span>
                    <span style={{ color: "#424242" }}>(2)</span>
                  </Link>
                </Col>
                <Col xs={6} sm={4} md={2} className="mb-2">
                  <Link className="ulink">
                    <span style={{ fontWeight: "500" }}>Unfulfilled</span>
                    <span style={{ color: "#424242" }}>(23)</span>
                  </Link>
                </Col>
                <Col xs={6} sm={4} md={2} className="mb-2">
                  <Link className="ulink">
                    <span style={{ fontWeight: "500" }}>Completed</span>
                    <span style={{ color: "#424242" }}>(2444)</span>
                  </Link>
                </Col>
                <Col xs={6} sm={4} md={2} className="mb-2">
                  <Link className="ulink">
                    <span style={{ fontWeight: "500" }}>Refunded</span>
                    <span style={{ color: "#424242" }}>(233)</span>
                  </Link>
                </Col>
                <Col xs={6} sm={4} md={2} className="mb-2">
                  <Link className="ulink">
                    <span style={{ fontWeight: "500" }}>Failed</span>
                    <span style={{ color: "#424242" }}>(244)</span>
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col md={4}></Col>
          </Row>

          <Row>
            <Col md={3} className="ms-5 mt-5">
              <InputGroup style={{ backgroundColor: "white" }}>
                <Form.Control placeholder="Search orders" />
              </InputGroup>
            </Col>
            <Col md={5} className="mt-5">
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="outline-secondary"
                    id="payment-status-dropdown"
                  >
                    Payment Status
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>All</Dropdown.Item>
                    <Dropdown.Item>Pending</Dropdown.Item>
                    <Dropdown.Item>Completed</Dropdown.Item>
                    <Dropdown.Item>Failed</Dropdown.Item>
                    <Dropdown.Item>Refunded</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="">
                  <Dropdown.Toggle
                    variant="outline-secondary"
                    id="fulfillment-status-dropdown"
                  >
                    Fulfillment Status
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>All</Dropdown.Item>
                    <Dropdown.Item>Pending</Dropdown.Item>
                    <Dropdown.Item>Completed</Dropdown.Item>
                    <Dropdown.Item>Failed</Dropdown.Item>
                    <Dropdown.Item>Refunded</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Button variant="outline-secondary" className="">
                  More Filters
                </Button>
              </div>
            </Col>

            <Col md={3} className="mt-5 ms-5">
              <Button variant="outline-secondary" className="me-3">
                <FaFileExport className="me-2" />
                Export
              </Button>
              <Button variant="primary">
                <FaPlusCircle className="me-2" />
                Add Order
              </Button>
            </Col>
          </Row>

          <div className="mt-5">
            <EnhancedTable />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Orders;
