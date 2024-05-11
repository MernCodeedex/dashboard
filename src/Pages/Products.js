import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Col, Form, Row, Table } from 'react-bootstrap'
import './Product.css'
import { Link, useParams } from 'react-router-dom'
import ProductDetails from './ProductDetails'

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [previousPage, setPreviousPage] = useState(null);
    const [activePage, setActivePage] = useState(1);

    const params = useParams();
    const userId = params.userId;

    useEffect(() => {
        console.log("userId:", userId);
    
                const fetchUserProducts = async (url) =>  {
                try {
                  console.log(userId);
                  if (!userId) {
            
                    return;
                }
                  const response = await axios.get(url ||  `http://praveencodeedex24.pythonanywhere.com/api/user-products/${userId}/`);
                  console.log('API Response:', response.data);
                  setProducts(response.data.results); 
                  setNextPage(response.data.next);
                  setPreviousPage(response.data.previous);
                  setLoading(false);
                } catch (error) {
                    console.error('Error fetching user products:', error);
                    setError('Error fetching user products. Please try again later.'); 
                    setLoading(false);
                }
              }
              fetchUserProducts();
            }, [userId]);

            const handleNextPage = async () => {
                try {
                    const response = await axios.get(nextPage);
                    setProducts(response.data.results);
                    setNextPage(response.data.next);
                    setPreviousPage(response.data.previous);
                    setActivePage(activePage + 1);
                } catch (error) {
                    console.error('Error fetching next page products:', error);
                    setError('Error fetching next page products. Please try again later.');
                }
            };

            const handlePreviousPage = async () => {
                try { 
                    
                    if (!previousPage) {
                    return; // Exit early if previousPage is null
                }
                     const response = await axios.get(previousPage);
                    setProducts(response.data.results);
                    setNextPage(response.data.next);
                    setPreviousPage(response.data.previous);
                    setActivePage(activePage - 1);
                } catch (error) {
                    console.error('Error fetching previous page products:', error);
                    setError('Error fetching previous page products. Please try again later.');
                }
            };

    return  (
        <div style={{ overflow: "hidden",borderRight: "1px solid #ccc"}}>
        <Header />
        <Row>
            <Col lg={2}>
                <Sidebar />
            </Col>
            <Col>
            <div style={{paddingRight : "150px", marginLeft: "-6px", background: "rgb(245, 245, 251)", marginBottom: "-40px"}}>
            
                <div>
                    <h1>Products</h1>
                </div>
                <div style={{ display: "flex", marginTop: "25px" }}>
                    <p style={{ marginRight: "20px" }}>All (6708)</p>
                    <p style={{ marginRight: "20px", color: "blue" }}>Published (568)</p>
                    <p style={{ marginRight: "20px", color: "blue" }}>Drafts (60)</p>
                    <p style={{ color: "blue" }}>On Discount (4550)</p>
                </div>
                <div className="search-1" style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                    <form action="/search" method="get" style={{ marginRight: "10px" }}>
                        <input type="text" name="search" placeholder="Search Products" style={{ width: "102%", fontSize: '12px' }} />
                    </form>
                    <div className="form-group w-25 p-2" style={{ marginRight: "10px" }}>
                        <Form.Select style={{ fontSize: '12px' }}>
                            <option>Category</option>
                            <option>Men</option>
                        </Form.Select>
                    </div>
                    <div className="form-group w-25 p-2" style={{ marginRight: "10px" }}>
                        <Form.Select style={{ fontSize: '12px' }}>
                            <option>Vendor</option>
                            <option>Men</option>
                        </Form.Select>
                    </div>
                    <div className="form-group w-25 p-2">
                        <Form.Select style={{ fontSize: '12px' }}>
                            <option>More Filters</option>
                            <option>Men</option>
                        </Form.Select>
                    </div>
                    <p style={{ marginRight: "5px", color: "blue", marginTop: "10px" }}><i className="fa-solid fa-file-export"></i></p>
                        <p style={{ marginRight: "20px", color: "blue", marginTop: "10px" }}>Export</p>
                        <button style={{ marginLeft: "20px", fontSize: '12px', height: '30px', padding: '5px 10px', marginRight: "20px", display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap' }} className='btn btn-primary'>+ Add Product</button>

                </div>
                </div>
                {/* <div style={{ display: "flex", alignItems: "center" }}> */}
                   
                {/* </div> */}
                <div style={{ marginTop: "20px" }}>
                    <Table striped bordered>
                        <tbody>
                        {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <div style={{ marginTop: "20px" }}>
                            <Table striped="columns">
                                <thead>
                                    <tr>
                                    <th><input type="checkbox" style={{ width: "15px", height: "15px" }} /></th>
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
                                    {products.map((product, index) => (
                                        <tr key={product.id}>
                                             <th><input type="checkbox" style={{ width: "15px", height: "15px" }} /></th>
                                            <td>
                                            {/* <ProductDetails product={product} />  */}
                                            <img src={product.product_images[0]} alt={`Product Image 0`} className="imgdivv" />
                                            {/* <div className="imgdivv">
                {product.product_images.map((image, imageIndex) => (
                    <img key={imageIndex} className="subimagee" src={image} alt={`Product Image ${imageIndex}`} />
                ))}
            </div> */}

                                            </td>
                                            <Link to={`/product/${product.id}`}><td>{product.Product_Name}</td></Link> 
                                            <td>${product.Offer_Price}</td>
                                            <td>{product.Category}</td>
                                            <td>{product.Tags}</td>
                                            {/* <td>{product.Tags.join(', ')}</td> */}
                                            {/* Uncomment once these fields are available */}
                                            {/* <td>{product.vendor}</td>
                                            <td>{product.published_on}</td> */}
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                    )}
                        </tbody>
                    </Table>
                </div>
            </Col>
        </Row>
        <div style={{marginLeft: "91%"}}>
                <span style={{ marginRight: '5px', cursor: 'pointer' }}>
                    {'<'}
                    <button className={`Pagination-btn ${activePage === 1 ? 'active' : ''}`}  onClick={handlePreviousPage} >
                        <span style={{ margin: '0 5px', cursor: "pointer", color: previousPage ? 'black' : 'blue', border: 'none', background: 'none', outline: 'none' }}>1</span>
                    </button>
                </span>
                <span style={{ marginLeft: '5px', cursor: 'pointer' }}>
                    <button className={`Pagination-btn ${activePage === 2 ? 'active' : ''}`} onClick={handleNextPage}>
                        <span style={{ margin: '0 5px', cursor: "pointer", color: nextPage ? 'black' : 'blue' }}>2</span>
                    </button>
                    {'>'}
                </span>
            </div>
            <div className="footer-container">
    <div className="footer-row">

    </div>
    <div className="second-footer-row">
    <p>Thank you for creating with Phoenix|2024 <Link to="#">©Themewagon</Link></p>
    <p style={{marginLeft: "780px"}}>v1.15.0</p>
    </div>
</div>

    </div>
    )
}

export default Products