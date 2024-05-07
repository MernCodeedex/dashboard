import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import { Col, Form, Row, Table } from 'react-bootstrap'
import './Product.css'

function Products() {
    return (
        <div style={{ overflow: "hidden" }}>
            <Header />

            <Row>
                <Col lg={3}>
                    <Sidebar></Sidebar>
                </Col>

                <Col>
                    <div>
                        <h1>Products</h1>
                    </div>
                    <div style={{ display: "flex", marginTop: "25px" }}>
                        <p style={{ marginRight: "20px" }}>All (6708)</p>
                        <p style={{ marginRight: "20px", color: "blue" }}>Published (568)</p>
                        <p style={{ marginRight: "20px", color: "blue" }}>Drafts (60)</p>
                        <p style={{ color: "blue" }}>On Discount (4550)</p>
                    </div>
                    <div className="search-1" style={{ display: "flex", alignItems: "center" }}>
                        <form action="/search" method="get" style={{ marginRight: "10px" }}>
                            <input type="text" name="search" placeholder="Search Products" style={{ width: "102%" }} />
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
                        <button style={{ marginLeft: "80px", marginTop: "10px" }} className='btn btn-primary'>+ Add Product</button>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <Table striped="columns">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th></th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Category</th>
                                    <th>Tags</th>
                                    <th>Vendor</th>
                                    <th>Published On</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="imageContainerr">
                                            <div className="imgdivv">
                                                <img className="subimagee" src='https://i.postimg.cc/rsCnj7FP/1c3f1846-6a46-42a8-9581-b8405977354b.jpg' />
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{color:"blue",width:"60px",padding:"13px"}}>Fitbit Sense Advanced  Smartwatch </td>
                                    <td>$56</td>
                                    <td>Accessories</td>
                                    <td>Watch </td>
                                    <td>ass</td>
                                    <td>09-04-2024</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="imageContainerr">
                                            <div className="imgdivv">
                                                <img className="subimagee" src='https://i.postimg.cc/rsCnj7FP/1c3f1846-6a46-42a8-9581-b8405977354b.jpg' />
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{color:"blue",width:"60px",padding:"13px"}}>Fitbit Sense Advanced  Smartwatch </td>
                                    <td>$56</td>
                                    <td>Accessories</td>
                                    <td>Watch </td>
                                    <td>ass</td>
                                    <td>09-04-2024</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="imageContainerr">
                                            <div className="imgdivv">
                                                <img className="subimagee" src='https://i.postimg.cc/rsCnj7FP/1c3f1846-6a46-42a8-9581-b8405977354b.jpg' />
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{color:"blue",width:"60px",padding:"13px"}}>Fitbit Sense Advanced  Smartwatch </td>
                                    <td>$56</td>
                                    <td>Accessories</td>
                                    <td>Watch </td>
                                    <td>ass</td>
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

export default Products