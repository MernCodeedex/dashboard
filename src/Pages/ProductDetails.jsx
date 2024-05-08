    import React, { useEffect, useState } from 'react'
    import { useParams } from 'react-router-dom';
    // import Products from './Products';
    import axios from 'axios';
    import '../Pages/ProductDetails.css'

    const ProductDetails = (products) => {
        const { productId } = useParams(); 
        const [product, setProduct] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        const [selectedImage, setSelectedImage] = useState(null);
        const [selectedSize, setSelectedSize] = useState(null); 
        
        useEffect(() => {
            const fetchProductDetails = async () => {
                try {
                    const response = await axios.get(`http://praveencodeedex24.pythonanywhere.com/api/user-products/${productId}`);
                    console.log('API Response:', response.data);
            
                    const selectedProduct = response.data.results.find(prod => prod.id.toString() === productId);
                    if (selectedProduct) {
                        setProduct(selectedProduct);
                        setLoading(false);
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

          

          if (!product) {
            return <p>Product not found</p>;
          }
          
    return (
        <div className="product-details-container">
             <div className="product-images">
                {product.product_images.length > 0 && (
                    <img src={product.product_images[0]} alt="Product Image 1"/>
                )}
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
                    <option value="">Select Size</option>
                    {product.sizes.map((size, index) => (
                        <option key={index} value={size}>{size}</option>
                    ))}
                </select>
        </div>
        </div>
    )
    }

    export default ProductDetails

                