import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'rgb(235, 238, 240)', color: '#333', padding: '20px', height: "250px" }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ flex: '1' }}>
          {/* First div content */}<h3 style={{color: "gray"}}>
          <img style={{width: "30px"}} src="https://prium.github.io/phoenix/v1.15.0/assets/img/icons/logo.png" alt="img" />
          phoenix</h3>
          <p style={{width: "500px", fontSize: "13px"}} >Phoenix is an admin dashboard template with fascinating features and amazing layout. The template is responsive to all major browsers and is compatible with all available devices and screen sizes.</p>
        </div>
        <div style={{ flex: '1' }}>
          {/* Second div content with 4 columns */}
          <div style={{ display: 'flex', justifyContent: 'flex-start',fontSize: "10px" }}>
            <div style={{ marginRight: '20px', fontSize: "13px" }}>
              <h6>About Phoenix</h6>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
               <Link style={{color: "gray"}} to='#'> <li>Careers</li></Link>
                <Link style={{color: "gray"}} to='#'><li>Affiliate Program</li></Link>
                <Link style={{color: "gray"}} to='#'><li>Privacy Policy</li></Link>
                <Link style={{color: "gray"}} to='#'><li>Terms & Conditions</li></Link>
              </ul>
            </div>
            <div style={{ marginRight: '40px' }}>
              <h6>Stay Connected</h6>
              <ul style={{ listStyleType: 'none', padding: 0, color: "gray" }}>
              <Link style={{color: "gray"}} to='#'><li>Blogs</li></Link>
              <Link style={{color: "gray"}} to='#'> <li><FaFacebookSquare style={{color: "blue"}}/>Facebook</li></Link>
              <Link style={{color: "gray"}} to='#'> <li><FaSquareTwitter style={{color: "blue"}} />Twitter</li></Link>
              </ul>
            </div>
            <div style={{ marginRight: '20px', fontSize: "13px"  }}>
              <h6>Customer Service</h6>
              <ul style={{ listStyleType: 'none', padding: 0, color: "gray" }}>
              <Link style={{color: "gray"}} to='#'> <li>Help Desk</li></Link>
              <Link style={{color: "gray"}} to='#'> <li>Support, 24/7</li></Link>
              <Link style={{color: "gray"}} to='#'> <li>Community of Phoenix</li></Link>
              </ul>
            </div>
            <div>
            <div style={{ marginRight: '20px', fontSize: "13px" }}>
              <h6>Payment Methods</h6>
              <ul style={{ listStyleType: 'none', padding: 0, color: "gray" }}>
              <Link style={{color: "gray"}} to='#'> <li>Cash on Delivery</li></Link>
              <Link style={{color: "gray"}} to='#'> <li>Online Payment</li></Link>
              <Link style={{color: "gray"}} to='#'> <li>PayPal</li></Link>
              <Link style={{color: "gray"}} to='#'> <li>Installment</li></Link>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
