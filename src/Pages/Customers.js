import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import { Col, Form, Row, Table } from 'react-bootstrap'
import './Product.css'

function Customers() {
    return (
        <div style={{ overflow: "hidden" }}>
            <Header />

            <Row>
                <Col lg={3}>
                    <Sidebar></Sidebar>
                </Col>

                <Col>
                    <div>
                        <h1>Customers</h1>
                    </div>
                    <div style={{ display: "flex", marginTop: "25px" }}>
                        <p style={{ marginRight: "20px" }}>All (6708)</p>
                        <p style={{ marginRight: "20px", color: "blue" }}>Published (568)</p>
                        <p style={{ marginRight: "20px", color: "blue" }}>Drafts (60)</p>
                        <p style={{ color: "blue" }}>On Discount (4550)</p>
                    </div>
                    <div className="search-1" style={{ display: "flex", alignItems: "center" }}>
                        <form action="/search" method="get" style={{ marginRight: "10px" }}>
                            <input type="text" name="search" placeholder="Search Customers" style={{ width: "102%" }} />
                        </form>
                        <div className="form-group w-25 p-2" style={{ marginRight: "10px" }}>
                            <Form.Select>
                                <option>Category</option>
                                <option>Men</option>

                            </Form.Select>
                        </div>
                        <div className="form-group w-25 p-2" style={{ marginRight: "10px" }}>
                            <Form.Select>
                                <option>Vendor</option>
                                <option>Men</option>

                            </Form.Select>
                        </div>
                        <div className="form-group w-25 p-2">
                            <Form.Select>
                                <option>More Filters</option>
                                <option>Men</option>

                            </Form.Select>
                        </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <p style={{ marginRight: "20px", color: "blue", marginTop: "20px" }}><i class="fa-solid fa-file-export"></i> Export</p>
                        <button style={{ marginLeft: "80px", marginTop: "10px" }} className='btn btn-primary'>+ Add Customer</button>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <Table striped="columns">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Customer</th>
                                    <th>Email</th>
                                    <th>Orders</th>
                                    <th>Total Spent</th>
                                    <th>City</th>
                                    <th>Last Seen</th>
                                    <th>Last Order</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="imageContainerr">
                                            <div style={{display:"flex",alignItems:"center"}}>
                                                <img style={{borderRadius:"50%"}} className="subimagee" src='https://i.postimg.cc/x8J3XkkS/prf1.png' /> <p style={{marginLeft:"10px",marginTop:"19px",fontWeight:"500"}}>Stanly Drinkwater</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{color:"blue",padding:"13px"}}>abcd@gmail.com </td>
                                    <td>56</td>
                                    <td>$6789</td>
                                    <td>India </td>
                                    <td>34 min ago</td>
                                    <td>09-04-2024</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="imageContainerr">
                                        <div style={{display:"flex",alignItems:"center"}}>
                                                <img style={{borderRadius:"50%"}} className="subimagee" src='https://i.postimg.cc/x8J3XkkS/prf1.png' /> <p style={{marginLeft:"10px",marginTop:"19px",fontWeight:"500"}}>Stanly Drinkwater</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{color:"blue",padding:"13px"}}>abcd@gmail.com</td>
                                    <td>56</td>
                                    <td>$6789</td>
                                    <td>India </td>
                                    <td>1 hr ago</td>
                                    <td>09-04-2024</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="imageContainerr">
                                        <div style={{display:"flex",alignItems:"center"}}>
                                                <img style={{borderRadius:"50%"}} className="subimagee" src='https://i.postimg.cc/x8J3XkkS/prf1.png' /> <p style={{marginLeft:"10px",marginTop:"19px",fontWeight:"500"}}>Stanly Drinkwater</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{color:"blue",padding:"13px"}}>abcd@gmail.com</td>
                                    <td>56</td>
                                    <td>$6783</td>
                                    <td>India </td>
                                    <td>2 hr ago</td>
                                    <td>09-04-2024</td>
                                </tr>
                                

                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Customers