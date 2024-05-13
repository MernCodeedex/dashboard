import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Form, Row, Table } from 'react-bootstrap';
import './Product.css';
import { Link, useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';

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
        const fetchUserProducts = async (url) =>  {
            try {
                if (!userId) {
                    return;
                }
                const response = await axios.get(url ||  `http://praveencodeedex24.pythonanywhere.com/api/user-products/${userId}/`);
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
        <div className="page-container">
            <Header />
            <Row>
                <Col className='sidebar' lg={2} md={3} sm={4} xs={12}>
                    <Sidebar/>
                </Col>
                <Col xl={8} lg={10} md={12}>
                    <div className="content-container">
                    <div className='upper-section'>
                    <h3 style={{fontWeight: "bolder", marginTop: "20px"}}>Products</h3>
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
                    
                    <div style={{ display: "flex", alignItems: "center",marginLeft: "auto",marginRight: "-220px" }}>
                        <p style={{ marginRight: "20px", color: "blue", marginTop: "20px" }}><i class="fa-solid fa-file-export"></i> Export</p>
                        <button style={{ width: "150px", marginTop: "10px" }} className='btn btn-primary'>+ Add Product</button>
                    </div>
                    </div>
                    </div>
                        <div className="table-section">
                            <Table striped bordered>
                                <tbody>
                                    {loading ? (
                                        <p>Loading...</p>
                                    ) : error ? (
                                        <p>{error}</p>
                                    ) : (
                                        <div>
                                            <Table striped="columns">
                                                <thead>
                                                    <tr>
                                                        <th><input type="checkbox" /></th>
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
                                                            <th><input type="checkbox" /></th>
                                                            <td>
                                                                <img src={product.product_images[0]} alt={`Product Image 0`} className="product-image" />
                                                            </td>
                                                            <Link to={`/product/${product.id}`}>
                                                                <td>{product.Product_Name}</td>
                                                            </Link> 
                                                            <td>${product.Offer_Price}</td>
                                                            <td>{product.Category}</td>
                                                            <td>{product.Tags}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        </div>
                                    )}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Col>
            </Row>
            <div className="pagination-section">
            {'<'}
                <button className={`Pagination-btn ${activePage === 1 ? 'active' : ''}`} onClick={handlePreviousPage}>
                    1
                </button>
                <button className={`Pagination-btn ${activePage === 2 ? 'active' : ''}`} onClick={handleNextPage}>
                   2
                </button>
                {'>'}
            </div>
            <div className="footer-container">
                <div className="footer-row">
                    {/* First row content */}
                </div>
                <div className="second-footer-row">
                    <p>Thank you for creating with Phoenix|2024 <Link to="#">©Themewagon</Link></p>
                    <p>v1.15.0</p>
                </div>
            </div>
        </div>
    );
}

export default Products;