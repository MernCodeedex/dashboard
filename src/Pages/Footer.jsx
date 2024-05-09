import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'rgb(225, 234, 237)', color: 'black', padding: '20px 0', fontSize: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap' }}>
                <p style={{ width: '30%', marginBottom: '10px' }}>Phoenix is an admin dashboard template with fascinating features and amazing layout. The template is responsive to all major browsers and is compatible with all available devices and screen sizes.</p>
                <div style={{ width: '70%', display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ flex: '1', marginRight: '20px', marginBottom: '20px' }}>
                        <div>
                            <h4>About Phoenix</h4>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: 'black', textDecoration: "none" }}>Careers</Link></li>
                                <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: 'black', textDecoration: "none" }}>Affiliate Program</Link></li>
                                <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: 'black', textDecoration: "none" }}>Privacy Policy</Link></li>
                                <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: 'black', textDecoration: "none" }}>Terms & Conditions</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ flex: '1', marginRight: '20px', marginBottom: '20px' }}>
                        <div>
                            <h4>Stay Connected</h4>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: 'black', textDecoration: "none" }}>Blogs</Link></li>
                                <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: 'black', textDecoration: "none" }}>Facebook</Link></li>
                                <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: 'black', textDecoration: "none" }}>Twitter</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ flex: '1', marginRight: '20px', marginBottom: '20px' }}>
                        <div>
                            <h4>Customer Service</h4>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: 'black', textDecoration: "none" }}>Help Desk</Link></li>
                                <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: 'black', textDecoration: "none" }}>Support, 24/7</Link></li>
                                <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: 'black', textDecoration: "none" }}>Community of Phoenix</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ flex: '1', marginBottom: '20px' }}>
                        <div>
                            <h4>Payment Methods</h4>
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: 'black', textDecoration: "none" }}>Cash on Delivery</Link></li>
                                <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: 'black', textDecoration: "none" }}>Online Payment</Link></li>
                                <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: 'black', textDecoration: "none" }}>PayPal</Link></li>
                                <li style={{ marginBottom: '5px' }}><Link to="#" style={{ color: 'black', textDecoration: "none" }}>Installment</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
