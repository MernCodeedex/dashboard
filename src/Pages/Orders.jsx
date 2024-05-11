import React from "react";
import Header from "../Components/Header";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Orders.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
//table
import EnhancedTable from "../Components/EnhancedTableView";
import { TextField, colors } from "@mui/material";


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
  createData(4, 'Frozen yoghurt', 159, 6.0, 24, 4.0) // Only Frozen yoghurt row
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
    <Col md={8} className="mt-4">
        <Row className="justify-content-md-center ms-5">
            <Col  xs={12} md={2} className=""><Link style={{textDecoration:"none",color:"#424242",fontSize:"13px"}}> <span style={{fontWeight:"500"}}>All </span>(68898)</Link></Col>
            <Col xs={12} md={2} className=""><Link className="ulink"> <span style={{fontWeight:"500",}}>PendingPayment</span><span style={{color:"#424242"}}>(2)</span></Link></Col>
            <Col xs={12} md={2} className=""><Link className="ulink"><span style={{fontWeight:"500"}}>Unfulfilled</span> <span style={{color:"#424242"}}>(23)</span></Link></Col>
            <Col xs={12} md={2} className=""><Link className="ulink"> <span style={{fontWeight:"500"}}>Completed</span> <span style={{color:"#424242"}}>(2444)</span></Link></Col>
            <Col xs={12} md={2} className=""><Link className="ulink"> <span style={{fontWeight:"500"}}>Refunded</span> <span style={{color:"#424242"}}>(233)</span></Link></Col>
            <Col xs={12} md={2} className=""><Link className="ulink"><span style={{fontWeight:"500"}}>Failed</span> <span style={{color:"#424242"}}>(244)</span></Link></Col>
        </Row>
    </Col>
    <Col md={4}></Col>
</Row>

<Row>
  <Col md={3} className="ms-5 mt-5">
    <InputGroup style={{ backgroundColor: "white" }}>
      <Form.Control
        placeholder="Search Order..."
      />
    </InputGroup>
  </Col>
  <Col md={4} className="mt-5">
    
  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
  <Select
    labelId="payment-status-label"
    id="payment-status"
    style={{ width: "300px",border:'.5px solid  #f6f8fb'  }} // Adjust margin as needed
    // Adjust height as needed
    sx={{ height: '35px' }}
    defaultValue="" // Set a default empty value
    displayEmpty // Display empty option
  >
    <MenuItem value="" disabled >
    <span style={{ fontWeight: 'normal', fontSize: '.8rem' }}> Payment Status</span> 
    </MenuItem>
    <MenuItem value="pending">Pending</MenuItem>
    <MenuItem value="completed">Completed</MenuItem>
    <MenuItem value="failed">Failed</MenuItem>
    <MenuItem value="refunded">Refunded</MenuItem>
  </Select>
  <Select
    labelId="payment-status-label"
    id="payment-status"
    style={{ width: "300px", border:'.5px solid  #f6f8fb', }} // Adjust margin as needed
    // Adjust height as needed
    sx={{ height: '35px' }}
    defaultValue="" // Set a default empty value
    displayEmpty // Display empty option
 
  >
    <MenuItem value="" disabled style={{ fontWeight: 'normal', fontSize: '0.8rem',border:'.5px solid  #f6f8fb' }}  >
    <span style={{ fontWeight: 'normal', fontSize: '.8rem' }}> Fullfilment Status</span> 
    </MenuItem>
    <MenuItem value="pending">Pending</MenuItem>
    <MenuItem value="completed">Completed</MenuItem>
    <MenuItem value="failed">Failed</MenuItem>
    <MenuItem value="refunded">Refunded</MenuItem>
  </Select>
  <Button style={{ fontWeight: 'normal', fontSize: '.8rem',border:'1px solid #c4c1c1',height: '35px',width:"175px" }} variant="outlined">More Filters</Button>

</div>
  </Col>
  <Col md={1}></Col>
  
  <Col md={3} className="mt-5 ms-5">
    <Link style={{textDecoration:"none",color:"black",fontSize: '.8rem'}}><span><i className="fa-solid fa-file-export"></i></span> <span style={{WebkitTextStroke:".5px"}}> Export</span></Link>
    <button style={{ marginLeft: "20px", fontSize: '12px', height: '30px', padding: '17px 20px', display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }} className='btn btn-primary'>{<AddOutlinedIcon />} <b> Add Product</b></button>

                      
  </Col>
</Row>

<div className="mt-5">
<EnhancedTable/>

</div>



        </Col>
      </Row>
    </div>
  );
}

export default Orders;
