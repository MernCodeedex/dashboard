import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import '../Pages/ViewProducts.css'


const ViewProducts = () => {
    const [userProducts, setUserProducts] = useState([]);
    const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
    const { userId } = useParams(); 
  
    useEffect(() => {
        const fetchUserProducts = async () =>  {
        try {
          console.log(userId);
          const response = await axios.get(`http://praveencodeedex24.pythonanywhere.com/api/user-products/${userId}/`);
          console.log('API Response:', response.data);
          setUserProducts(response.data.results);
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
    console.log('userProducts:', userProducts);

    const handleNextPage = async () => {
        try {
            const response = await axios.get(nextPage);
            setUserProducts(response.data.results);
            setNextPage(response.data.next);
            setPreviousPage(response.data.previous);
        } catch (error) {
            console.error('Error fetching next page:', error);
        }
    };

    const handlePreviousPage = async () => {
        try {
            const response = await axios.get(previousPage);
            setUserProducts(response.data.results);
            setNextPage(response.data.next);
            setPreviousPage(response.data.previous);
        } catch (error) {
            console.error('Error fetching previous page:', error);
        }
    };

    const handleProductClick = (productId) => {
        
        const product = userProducts.find((product) => product.id === productId);
        setSelectedProduct(product);
        
        
        
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }

    return (
        <div className="product-list-container">
      <h1 className="product-list-title">User Products</h1>
      <ul className="product-list">
        {userProducts.map(product => (
          <li key={product.id} className="product-item">
            {/* <Link to={`/product/${product.id}`} className="product-link"> */}
              <div className="product-details">
              <img src={product.product_images[0]} alt={`Product Image 0`} className="product-image" />

                <h3 className="product-name">Name: {product.Product_Name}</h3>
                <p className="product-size">Size: {product.sizes}</p>
                <p className="product-price">Price: {product.Price}</p>
                <strong>
                <p className="product-offerPrice">Offer Price: {product.Offer_Price}</p>
                </strong>
                
                <button onClick={() => handleProductClick(product.id)} className="details-button">Details</button>
                
              </div>
            {/* </Link> */}
          </li>
        ))}
      </ul>
      
      {selectedProduct && (
  <div className="big-card show">
    <Slider {...settings}>
      {selectedProduct.product_images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Product Image ${index}`} className="carousel-image" />
        </div>
      ))}
    </Slider>
    <div className="big-card-details">
    <div className="details-content">
      <h2 className="big-card-title">Name : {selectedProduct.Product_Name}</h2>
      <p>Size: {selectedProduct.sizes}</p>
      <p>Price: {selectedProduct.Price}</p>
      <p>Offer Price: {selectedProduct.Offer_Price}</p>
      <p>Color: {selectedProduct.Color}</p>
      <p>Description: {selectedProduct.Description}</p>
      <p>Fabric Type: {selectedProduct.Fabric_Type}</p>
      <p >Fit Type: {selectedProduct.Fit_Type}</p>
      <p>Gender: {selectedProduct.Gender}</p>
      <p>Exchange: {selectedProduct.Exchange_Days}</p>
      <button onClick={() => setSelectedProduct(null)} className="close-button">
        <AiOutlineCloseCircle />
      </button>
    </div>
    </div>
  </div>
)}


{/* {userProducts.map(product=>(
        <div className="big-card">
            <li key={product.id} className="product-item">
        <h2 className="big-card-title">Name : {product.Product_Name}</h2>
        <p>Size: {product.sizes}</p>
        <p>Price: {product.Price}</p>
        <p>Offer Price: {product.Offer_Price}</p>
        <p className="product-Color">Color: {product.Color}</p>
        <p className="product-Description">Description: {product.Description}</p>
        <p className="product-Fabric_Type">Size: {product.Fabric_Type}</p>
        <p className="product-Fit_Type">Fit_Type: {product.Fit_Type}</p>
        <p className="product-Gender">Gender: {product.Gender}</p>
        <p>Exchange: {product.Exchange_Days}</p>
        <p>Fit: {product.Fit_Type}</p>
        <button onClick={() => setSelectedProduct(null)} className="close-button">Close</button>
        </li>
      </div>
      ))} */}
      
      <div className="pagination">
        {previousPage && <button onClick={handlePreviousPage}>Previous</button>}
        {nextPage && <button onClick={handleNextPage}>Next</button>}
      </div>
    </div>
    );
  }

export default ViewProducts
