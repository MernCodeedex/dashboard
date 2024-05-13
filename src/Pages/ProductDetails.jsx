        import React, { useEffect, useState } from 'react'
        import { Link, useParams } from 'react-router-dom';
        // import Products from './Products';
        import axios from 'axios';
        import { FiShoppingCart } from "react-icons/fi";
        import { IoCart } from "react-icons/io5";
        import { IoIosNotificationsOutline } from "react-icons/io";
        import { FiUser } from "react-icons/fi";
        import { BsList } from "react-icons/bs";
        import { CiHeart } from "react-icons/ci";
        import '../Pages/ProductDetails.css'
        import Content from './Content';
        import Reviews from './Reviews';
        import Footer from '../Pages/Footer'
        import {Row, Col} from 'react-bootstrap'

        const ProductDetails = (products) => {
            const { productId } = useParams(); 
            const [product, setProduct] = useState(null);
            const [loading, setLoading] = useState(true);
            const [error, setError] = useState(null);
            const [selectedImage, setSelectedImage] = useState(null);
            const [selectedSize, setSelectedSize] = useState(null);
            const [searchTerm, setSearchTerm] = useState(''); 
            const [selectedTab, setSelectedTab] = useState('description');
            const [quantity, setQuantity] = useState(1);
            
            useEffect(() => {
                const fetchProductDetails = async () => {
                    try {
                        const response = await axios.get(`http://praveencodeedex24.pythonanywhere.com/api/user-products/${productId}`);
                        console.log('API Response:', response.data);
                
                        const selectedProduct = response.data.results.find(prod => prod.id.toString() === productId);
                        if (selectedProduct) {
                            setProduct(selectedProduct);
                            setLoading(false);
                            if (selectedProduct.product_images.length > 0) {
                                setSelectedImage(selectedProduct.product_images[0]);
                            }
                        } else {
                            setError('Product not found');
                            setLoading(false);
                        }
                    } catch (error) {
                        console.error('Error fetching product details:', error);
                        setError('Error fetching product details. Please try again later.');
                        setLoading(false);
                    }
                };
            
                fetchProductDetails();
            }, [productId]);

            const handleSearchChange = (e) => {
                setSearchTerm(e.target.value);
            };

            const handleAddToCart = () => {
                console.log('Product added to cart:', product);
            };
        
            const handleAddToWishlist = () => {
                console.log('Product added to wishlist:', product);
            };
            const handleIncreaseQuantity = () => {
                setQuantity(prevQuantity => prevQuantity + 1);
            };
        
            const handleDecreaseQuantity = () => {
                if (quantity > 1) {
                    setQuantity(prevQuantity => prevQuantity - 1);
                }
            };
            if (!product) {
                return <p>Product not found</p>;
            }
            let tabContent;
            switch (selectedTab) {
                case 'description':
                    tabContent = <Content />;
                    break;
                    case 'ratings':
                        tabContent = (
                            <div className="reviews-card" style={{ width: '50%' }}>
                                <Reviews />
                            </div>
                        );
                        break;
                    default:
                        tabContent = null;
            }
            
        return (
            <div style={{background:"rgb(245, 245, 251)"}}>
            <div className="search-bar">
                <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchChange}/>
                <div className="icons">
            <FiShoppingCart />
            <IoIosNotificationsOutline />
            <FiUser />
            </div>
            </div>
            <div className="category-line" style={{background:"white", height: "40px"}}>
        <div className="category-title"><BsList /> Category
        <Link style={{ paddingLeft: "400px", textDecoration: "none",fontWeight:"normal",color:"black", marginRight: "30px" }} to='#'>Home</Link>
        <Link style={{ textDecoration: "none",fontWeight:"normal",color:"black", marginRight: "30px" }} to='#'>My Favorites Stores</Link>
        <Link style={{ textDecoration: "none",fontWeight:"normal",color:"black",  marginRight: "30px" }} to='#'>Products</Link>
        <Link style={{ textDecoration: "none", fontWeight:"normal",color:"black",  marginRight: "30px" }} to='#'>Wishlist</Link>
        <Link style={{ textDecoration: "none",fontWeight:"normal",color:"black",  marginRight: "30px" }} to='#'>Shipping Info</Link>
        <Link style={{ textDecoration: "none",fontWeight:"normal",color:"black",  marginRight: "30px" }} to='#'>Be a Vendor</Link>
        <Link style={{ textDecoration: "none",fontWeight:"normal",color:"black",  marginRight: "30px" }} to='#'>Track Order</Link>
        <Link style={{ textDecoration: "none",fontWeight:"normal",color:"black",  marginRight: "30px" }} to='#'>Checkout</Link>
        </div>
    </div>
    <div style={{marginLeft: "200px", marginTop: "30px"}}>
                    <Link style={{ textDecoration: "none",  marginRight: "9px",fontSize:"12px", fontWeight: "bold", paddingLeft: "-50px" }} to='/fashion'>Fashion</Link>
                    <span>{'>'}</span>
                    <Link style={{ textDecoration: "none",  marginRight: "9px", marginLeft: "15px",fontSize:"12px", fontWeight: "bold" }} to='/mens-fashion'>Mens Fashion</Link>
                    <span>{'>'}</span>
                    <Link style={{ textDecoration: "none", marginLeft: "15px",fontSize:"12px", fontWeight: "bold" }} to='/shirts'>Shirts</Link>
                </div>
            <div className="product-details-container"style={{marginTop: "-7%"}}>
                  
              <div className="product-images" style={{marginLeft: "100px"}}>
            
            <div className="thumbnail-images">
                {product.product_images.slice(0, 3).map((image, index) => (
                   <div key={index} className="thumbnail-card">
                   <img src={image} alt={`Product Thumbnail Image ${index + 1}`} onClick={() => setSelectedImage(image)} />
               </div>
                ))}

                
            </div>
        
            <div className="main-image-card" style={{marginTop: "-350px"}}>
            {selectedImage && (
                <div className="selected-image">
                    <img src={selectedImage} alt="Selected Product Image" />
                </div>
            )}
            </div>
            <div className='btns' style={{ marginTop: "-40px", marginLeft: "132px" }}>
            <button onClick={handleAddToWishlist} style={{ marginLeft: "10px" }}><CiHeart style={{width: "30px", height: "25px"}}/>Add to Wishlist</button>
                    <button style={{background: "ff7f0e"}} onClick={handleAddToCart}><IoCart style={{width: "30px", height: "25px"}} /> Add to Cart</button>
                 
                </div>
        </div>
       
                <div className="product-description">
                <h1 style={{fontSize:"50px"}}>{product.Product_Name}</h1>
                <div style={{display: "flex"}}>
                        <h2 style={{ fontWeight: "bold" }}> ${product.Offer_Price}</h2>
                        <h2 style={{ color: "grey", textDecoration: "line-through", marginLeft: "10px" }}>{product.Price}</h2>
                    </div>
                <p>Category: {product.Category}</p>
                <p>Tags: {product.Tags}</p>
                <p>Color: {product.Color}</p>
                <p>Fabric Type: {product.Fabric_Type}</p>
                <p>Fit Type: {product.Fit_Type}</p>
                <label htmlFor="size">Size:</label>
                    <select
                        id="size"
                        value={selectedSize}
                        onChange={(e) => setSelectedSize(e.target.value)}className="custom-select"
                    >
                        {/* <option value="">Select Size</option> */}
                        {product.sizes.map((size, index) => (
                            <option key={index} value={size}>{size}</option>
                        ))}
                    </select>
                    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '10px' }}>
        <label style={{marginTop: "-72px", marginLeft: "151px"}} htmlFor='quantity'>Quantity:</label>
        <button className='quantity-btn'  onClick={handleDecreaseQuantity} >-</button>
        <span style={{ margin: '0 10px' }}>{quantity}</span>
        <button className='quantity-btn'onClick={handleIncreaseQuantity}>+</button>
    </div>
            </div>
            </div>
            <div className="Second-container" style={{ marginTop: '20px', marginLeft: '20px', marginRight: "5%", display: "flex" }}>
                <div className="description" style={{ flex: 1 }}>
                    <div onClick={() => setSelectedTab('description')} className={selectedTab === 'description' ? 'selected' : ''}>Description</div>
                    <div onClick={() => setSelectedTab('specification')} className={selectedTab === 'specification' ? 'selected' : ''} style={{ marginLeft: '20px' }}>Specification</div>
                    <div onClick={() => setSelectedTab('ratings')} className={selectedTab === 'ratings' ? 'selected' : ''} style={{ marginLeft: '20px' }}>Ratings & Reviews</div>
                </div>
                
            </div>
            <Row>
    <Col>
        <div className='Left' style={{ marginTop: '20px', marginLeft: '200px', marginRight: "5%", display: "flex", flexWrap: "wrap" }}>
            {tabContent}
        </div>
    </Col>
    <Col>
        <div className="Right">
            <h5>Usually Bought Together</h5>
            <p>with 24" iMac® with Retina 4.5K display -</p>
            <p style={{ borderTop: '1px dashed gray', marginBottom: '10px' }}></p>
            <div style={{paddingTop: "240px"}}>
            <p style={{ borderTop: '1px dashed gray', marginBottom: '10px' }}></p>
            <h4 style={{ color: "grey" }}>Total</h4>
            </div>
            <button>Add 3 Items to Cart <IoCart style={{width: "20px", height: "25px"}}/></button>
        </div>
    </Col>
</Row>

        <Footer/>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <p>Thank you for creating with Phoenix|2024 <Link to="#">©Themewagon</Link></p>
  <p>v1.15.0</p>
</div>
        
            </div>


        )
        }

        export default ProductDetails

  

