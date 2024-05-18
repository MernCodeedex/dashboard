import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import { Card, Col, Form, FormSelect, Row, Table } from 'react-bootstrap';
import "../Pages/Order.css"
import { Link, useParams } from 'react-router-dom';
import { FiUser } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { BsBoxSeam } from "react-icons/bs";
import { RiFileList2Line } from "react-icons/ri";
import axios from 'axios';

const Order = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const userId = params.userId;

    useEffect(()=>{
      const fetchUserProducts = async (url) =>{
        try {
          const response = await axios.get(url || `http://praveencodeedex24.pythonanywhere.com/api/user-products/${userId}/`);
          setProducts(response.data.results);
        } catch (error) {
          if (error.response) {
            console.error('Error response:', error.response);
          } else if (error.request) {
            console.error('Error request:', error.request);
          } else {
            console.error('Error message:', error.message);
          }
          console.error('Error config:', error.config);
        }
      }
      fetchUserProducts();
    }, [userId]);
  return (
    <div>
       <Header />
        <Row>
            <Col lg={2} md={3} sm={4} xs={12} className="sidebar-container">
            <Sidebar/>
            </Col>
            <Col lg={10} md={9} sm={8} xs={12} className="order-container">
            <Row>
            <Col lg={7} md={12} sm={12} xs={12} className="left-container">
            <div className='left-sub'>
            <Link to='#'>Page1</Link>{'>'}
            <Link to='#'>Page2</Link>{'>'}
            <p>Default</p>
            </div>
            <h2 style={{marginLeft:"20px"}} >Order #349</h2> 
            <p style={{marginLeft:"20px"}} >Customer ID : <Link style={{fontWeight: "bold", textDecoration: "none"}} to='#'>2364847</Link> </p>
            <div className='table-container'>
             <div className='table-wrapper'>
             <table>
                <thead>
                <tr>
                  <th></th>
            <th style={{paddingLeft: "35px"}}>PRODUCTS</th>
            <th style={{paddingLeft: "2px"}} >COLOR</th>
            <th>SIZE</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL</th>
          </tr>
                </thead>
                <tbody style={{textAlign: "center"}}>
                  {products.slice(0, 7).map((product, index)=>(
                    <tr key={product.id}>
                      <td>
                      <img src={product.product_images[0]} alt={`Product Image 0`} className="product-image" />
                      </td>
                      <Link to={`/order/${product.id}`}>
                        <td>{product.Product_Name}</td>
                      </Link>
                      <td>{product.Color}</td>
                      <td>{product.sizes}</td>
                      <td>{product.Offer_Price}</td>
                      <td></td>
                      <td>{product.Price}</td>
                    </tr>
                  ))}
        </tbody>
              </table>
             </div>
             <div className="subtotal">
        <span>Item Subtotal: </span>
        <span style={{paddingRight: "135px"}}>$1690</span>
      </div>
      <div className='order-details'>
       {/* <ul>
        <li><strong>Billing details</strong></li>
        <li style={{marginLeft: "80px"}}><strong>Shipping details</strong></li>
        <li style={{marginLeft: "80px"}}><strong>Other details</strong></li>
       </ul>
       <ul className='sub-order'>
        <li><FiUser />Customer</li>
        <li style={{marginLeft: "110px"}}><MdOutlineMail />Email</li>
        <li style={{marginLeft: "155px"}}><FiShoppingBag />Gift order</li>
       </ul> */}

       <div className='order-details-sub'>
       <h5 style={{fontSize: "20px", marginLeft: "-19px"}}>Billing Address</h5>
       <p><FiUser />Customer</p>
       <p><Link to="#">Shatinon Mekalan</Link> </p>
       <p><MdOutlineMail />Email</p>
       <p><Link to="#">shatinon@jeemail.com</Link> </p>
       <p><FiPhone />Phone</p>
       <p><Link to="#">+1234567890</Link> </p>
       <p><FiHome />Address</p>
       <p>Shatinon Mekalan
       Vancouver, British Columbia,
       Canada</p>
       </div>
       <div className='order-details-sub'>
       <h5 style={{fontSize: "20px", marginLeft: "-19px"}}>Shipping details</h5>
       <p><MdOutlineMail />Email</p>
       <p><Link to="#">shatinon@jeemail.com</Link> </p>
       <p><FiPhone />Phone</p>
       <p><Link to="#">+1234567890</Link> </p>
       <p><CiCalendar />Shipping Date</p>
       <p>12 Nov, 2021</p>
       <p><FiHome />Address</p>
       <p>Shatinon Mekalan
       Vancouver, British Columbia,
       Canada</p>
       </div>
       <div className='order-details-sub'>
       <h5 style={{fontSize: "20px", marginLeft: "-19px"}}>Other details</h5>
       <p><FiShoppingBag />Gift order</p>
       <p>Yes</p>
       <p><BsBoxSeam />Wraping</p>
       <p>Magic wrapper</p>
       <p><RiFileList2Line />Recipient</p>
       <p>Monjito Shiniga</p>
       <p><MdOutlineMail />Gift Message</p>
       <p>Happy Birthday Shiniga
      Lots of Love Buga Buga!!
      Yours,
      Mekalan</p>
       </div>
      </div>
            </div>
            </Col>
            <Col lg={5} md={12} sm={12} xs={12} className="right-container">
            <Card style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
  <Card.Body>
    <Card.Title style={{fontWeight: "bold", fontSize: "25px"}}>Summary</Card.Title>
    <Card.Text>
      <div className="summary-line">
        <span>Items subtotal :</span>
        <span>$691</span>
      </div>
      <div className="summary-line">
        <span>Discount :</span>
        <span>-$59</span>
      </div>
      <div className="summary-line">
        <span>Tax :</span>
        <span>$126.20</span>
      </div>
      <div className="summary-line">
        <span>Subtotal :</span>
        <span>$665</span>
      </div>
      <div className="summary-line">
        <span>Shipping Cost :</span>
        <span>$30</span>
      </div>
      <div className='dashed-line'>
        <div className='summery-line total-line' style={{fontSize: "20px"}}>
         <span>Total :</span>
         <span style={{marginLeft: "170px"}}>$695.20</span>
        </div>
      </div>
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{marginTop: "20px", height: "240px"}}>
  <Card.Body>
    <Card.Title style={{fontWeight: "bold", fontSize: "25px"}}>Order Status</Card.Title>
    <div style={{fontSize: "14px "}}>
      <p>Payment Status</p>
      <Form.Select style={{marginBottom: "5px", fontSize: "14px "}}>
        <option>Processing</option>
        <option>Canceled</option>
        <option>Completed</option>
      </Form.Select>
      </div>
      <div style={{fontSize: "14px "}}>
      <p>Fulfillment status</p>
      <Form.Select style={{fontSize: "14px "}}>
        <option>Unfulfilled</option>
        <option>Fulfilled</option>
        <option>Pending</option>
      </Form.Select>
    </div>
  </Card.Body>
</Card>
</Col>

          </Row> 
          <div className="bottom-line">
            
          </div>
            </Col>
        </Row>
    </div>
  )
}

export default Order
