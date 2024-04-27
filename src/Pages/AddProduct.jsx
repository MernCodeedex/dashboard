import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import { Col, Row } from "react-bootstrap";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import SplitButton from "react-bootstrap/SplitButton";
import { Dropdown } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

function AddProduct() {
  const [productDetails, setProductDetails] = useState({
    Product_Name: "",
    Description: "",
    product_images: [],
    sizes: "",
    Gender: "",
    Category: "",
    Price: "",
    Offer_Price: "",
    Color: "",
  });
  console.log(productDetails);

  const sidebarStyle = {
    width: "200px",
    backgroundColor: "#f2f2f2",
    border: "1px solid #ddd",
    color: "#5b5a5a",
  };

  const handleGenderSelect = (eventKey) => {
    setProductDetails({
      ...productDetails,
      Gender: eventKey,
    });
  };
  const handleCategorySelect = (eventKey) => {
    setProductDetails({
      ...productDetails,
      Category: eventKey,
    });
  };
  const handleTagSelect = (eventKey) => {
    setProductDetails({
      ...productDetails,
      Color: eventKey,
    });
  };
  const handleSizeSelect = (eventKey) => {
    setProductDetails({
      ...productDetails,
      sizes: eventKey,
    });
  };
  const handleFileSelect = (event) => {
    setProductDetails({
      ...productDetails,
      product_images: Array.from(event.target.files),
    });
  };
  const handlesubmit = () => {
    const formData = new FormData();
    formData.append("Category", productDetails.Category);
    formData.append("Product_Name", productDetails.Product_Name);
    formData.append("Description", productDetails.Description);

    for (let i = 0; i < productDetails.product_images.length; i++) {
      formData.append("product_images", productDetails.product_images[i]);
    }

    formData.append("sizes", productDetails.sizes);
    formData.append("Gender", productDetails.Gender);
    formData.append("Price", productDetails.Price);
    formData.append("Offer_Price", productDetails.Offer_Price);
    formData.append("Color", productDetails.Color);

    axios
      .post(
        "https://praveencodeedex24.pythonanywhere.com/api/add-products/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        if (response.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Submitted",
            text: "Your form has been successfully submitted!",
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const itemStyle = {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#f6f8fb",
  };
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />

      <Row>
        <Col lg={2}>
          <Sidebar />
        </Col>

        <Col
          lg={10}
          style={{
            backgroundColor: "#f6f8fb",
            borderLeft: "1px solid #b6b6b5",
          }}
        >
          <Row>
            {" "}
            <Col md={4}>
              <h3 className="ms-5 text-black">
                {" "}
                <b>Add a Product</b>
              </h3>
              <p
                className="ms-5"
                style={{ fontWeight: "500", lineHeight: "3px" }}
              >
                Orders placed across your store
              </p>
            </Col>
            <Col md={4}> </Col>
            <Col md={4} className="mt-4">
              {" "}
              <Button
                variant="outlined"
                style={{
                  color: "black",
                  border: "1px solid #c5c5c5",
                  height: "35px",
                  textTransform: "capitalize",
                }}
              >
                Discard
              </Button>
              <Button
                variant="outlined"
                className="ms-2"
                style={{
                  color: "#0468d5",
                  border: "1px solid #c3e0ff",
                  height: "35px",
                  textTransform: "capitalize",
                }}
              >
                Save Draft
              </Button>
              <Button
                onClick={handlesubmit}
                className="ms-2"
                variant="contained"
                style={{
                  backgroundColor: "#0468d5",
                  height: "35px",
                  textTransform: "capitalize",
                }}
              >
                Publish Product
              </Button>
            </Col>
          </Row>
          <Row>
            <Col md={7}>
              <h5
                className="ms-5 mt-5 text-black"
                style={{ WebkitTextStroke: ".6px" }}
              >
                Product Title
              </h5>
              <input
                className="ms-5 mt-2"
                onChange={(e) =>
                  setProductDetails({
                    ...productDetails,
                    Product_Name: e.target.value,
                  })
                }
                style={{
                  width: "80%",
                  height: "5vh",
                  fontSize: ".8rem",
                  borderRadius: "5px",
                  padding: "10px",
                  border: "1px solid #c5c5c5",
                }}
                type="text"
                placeholder="Write title here..."
              />
              <h5
                className="ms-5 mt-5 text-black"
                style={{ WebkitTextStroke: ".6px" }}
              >
                Product Description
              </h5>
              <textarea
                className="ms-5 mt-2"
                onChange={(e) =>
                  setProductDetails({
                    ...productDetails,
                    Description: e.target.value,
                  })
                }
                style={{
                  width: "80%",
                  flex: 1,
                  fontSize: ".8rem",
                  borderRadius: "5px",
                  border: "1px solid #c5c5c5",
                  padding: "10px",
                  boxSizing: "border-box",
                  height: "28vh",
                }}
                placeholder="Write title here..."
              />

              <h5
                className="ms-5 mt-5 text-black"
                style={{ WebkitTextStroke: ".6px" }}
              >
                Display Image
              </h5>
              <div
                className="ms-5 mt-3"
                style={{
                  paddingTop: "60px",
                  border: "1px dashed ",
                  width: "80%",
                  height: "28vh",
                  marginBottom: "10%",
                }}
              >
                <center>
                  <label htmlFor="fileInput" style={{ cursor: "pointer" }}>
                    Drag Your Photos here or{" "}
                    <span>
                      <span
                        style={{ textDecoration: "none", color: "#0468d5" }}
                        href=""
                      >
                        Browse from device
                      </span>
                    </span>
                  </label>
                  <input
                    onChange={handleFileSelect}
                    type="file"
                    id="fileInput"
                    multiple
                    style={{ display: "none" }}
                  />
                  <br />
                  <i
                    style={{ color: "#667283" }}
                    className="fa-solid fa-image fa-3x mt-2"
                  ></i>
                </center>
              </div>

              <h5
                className="ms-5  mt-5 text-black"
                style={{ WebkitTextStroke: ".6px" }}
              >
                Inventory
              </h5>
              <div className="ms-5 mt-3">
                <div className="d-flex border">
                  <div style={sidebarStyle}>
                    <div style={itemStyle}>
                      <i class="fa-solid fa-tag"></i> Price
                    </div>
                    <div style={itemStyle}>
                      <i class="fa-solid fa-dice-d6"></i> Restock
                    </div>
                    <div style={itemStyle}>
                      <i class="fa-solid fa-truck-fast"></i> Shipping
                    </div>
                    <div style={itemStyle}>
                      <i class="fa-solid fa-globe"></i> Global Delivery
                    </div>
                    <div style={itemStyle}>
                      <i class="fa-solid fa-sliders"></i> Attributes
                    </div>
                    <div style={itemStyle}>
                      <i class="fa-solid fa-lock"></i> Advanced
                    </div>
                  </div>

                  <div>
                    <div className="d-flex">
                      <div className="ms-3 mt-2">
                        <label
                          htmlFor=""
                          style={{ color: "#5b5a5a" }}
                          className="mb-2"
                        >
                          Regular Price
                        </label>
                        <input
                          onChange={(e) =>
                            setProductDetails({
                              ...productDetails,
                              Price: e.target.value,
                            })
                          }
                          style={{ color: "#9c9c9c" }}
                          type="text"
                          className="form-control"
                          placeholder="$$$"
                        />
                      </div>
                      <div className="ms-3 mt-2">
                        <label
                          htmlFor=""
                          style={{ color: "#5b5a5a" }}
                          className="mb-2"
                        >
                          Sales Price
                        </label>
                        <input
                          style={{ color: "#9c9c9c" }}
                          onChange={(e) =>
                            setProductDetails({
                              ...productDetails,
                              Offer_Price: e.target.value,
                            })
                          }
                          type="text"
                          className="form-control"
                          placeholder="$$$"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={5} className="mt-5">
              <Row>
                <Col md={2}></Col>
                <Col
                  style={{ padding: "10px", backgroundColor: "white" }}
                  md={8}
                >
                  <div>
                    <h5 className="mt-2 ms-2" style={{ color: "#464646" }}>
                      <b>Organize</b>
                    </h5>
                    <p className="ms-2 mt-4" style={{ color: "#464646" }}>
                      <b>Category</b>{" "}
                      <Link
                        style={{ textDecoration: "none", color: "#0468d5" }}
                      >
                        Add new category
                      </Link>
                    </p>

                    <SplitButton
                      onSelect={handleGenderSelect}
                      className="ms-2"
                      style={{
                        width: "90%",
                        color: "#464646",
                        backgroundColor: "white",
                        border: "1px solid #b0b0b0",
                      }}
                      id={`dropdown-button-drop-down-centered`}
                      drop="down-centered"
                      variant=""
                      title="Men's Clothing"
                    >
                      <Dropdown.Item eventKey="men">Men</Dropdown.Item>
                      <Dropdown.Item eventKey="women">Women</Dropdown.Item>
                      <Dropdown.Item eventKey="boy">Boy</Dropdown.Item>
                      <Dropdown.Item eventKey="girl">Girl</Dropdown.Item>
                    </SplitButton>

                    <p className="ms-2 mt-4" style={{ color: "#464646" }}>
                      <b> Vendor</b>{" "}
                      <Link
                        style={{ textDecoration: "none", color: "#0468d5" }}
                      >
                        {" "}
                        Add newVendor
                      </Link>
                    </p>

                    <SplitButton
                      className="ms-2"
                      style={{
                        width: "90%",
                        color: "#464646",
                        backgroundColor: "white",
                        border: "1px solid #b0b0b0",
                      }}
                      id={`dropdown-button-drop-down-centered`}
                      drop="down-centered"
                      variant=""
                      title="Men's Clothing"
                      onSelect={handleCategorySelect}
                    >
                      <Dropdown.Item eventKey="shirts">Shirt</Dropdown.Item>
                      <Dropdown.Item eventKey="pants">Pant</Dropdown.Item>
                      <Dropdown.Item eventKey="shoes">Shoes</Dropdown.Item>

                      <Dropdown.Item eventKey="accessories">
                        Accessories
                      </Dropdown.Item>
                    </SplitButton>
                    <p className="ms-2 mt-4" style={{ color: "#464646" }}>
                      <b>Collection</b>
                    </p>

                    <SplitButton
                      className="ms-2"
                      style={{
                        width: "90%",
                        color: "#464646",
                        backgroundColor: "white",
                        border: "1px solid #b0b0b0",
                      }}
                      id={`dropdown-button-drop-down-centered`}
                      drop="down-centered"
                      variant=""
                      title="Collection"
                    ></SplitButton>

                    <p className="ms-2 mt-4" style={{ color: "#464646" }}>
                      <b> Tags</b>{" "}
                      <Link
                        style={{ textDecoration: "none", color: "#0468d5" }}
                      >
                        View all tags
                      </Link>
                    </p>

                    <SplitButton
                      onSelect={handleTagSelect}
                      className="ms-2"
                      style={{
                        width: "90%",
                        color: "#464646",
                        backgroundColor: "white",
                        border: "1px solid #b0b0b0",
                        marginBottom: "20px",
                      }}
                      id={`dropdown-button-drop-down-centered`}
                      drop="down-centered"
                      variant=""
                      title="Men's Clothing"
                    >
                      <Dropdown.Item eventKey="red">Red</Dropdown.Item>
                      <Dropdown.Item eventKey="blue">Blue</Dropdown.Item>
                      <Dropdown.Item eventKey="green">Green</Dropdown.Item>
                      <Dropdown.Item eventKey="yellow">Yellow</Dropdown.Item>
                    </SplitButton>
                  </div>
                </Col>
                <Col md={2}></Col>
              </Row>

              <Row className="mt-4 mb-4">
                <Col md={2}></Col>
                <Col
                  style={{ padding: "10px", backgroundColor: "white" }}
                  md={8}
                >
                  <div>
                    <h5 className="mt-2 ms-2" style={{ color: "#464646" }}>
                      <b>Variants</b>
                    </h5>
                    <p className="ms-2 mt-4" style={{ color: "#464646" }}>
                      <b>Options 1</b>{" "}
                      <Link
                        style={{ textDecoration: "none", color: "#0468d5" }}
                      >
                        Remove
                      </Link>
                    </p>

                    <SplitButton
                      onSelect={handleSizeSelect}
                      className="ms-2"
                      style={{
                        width: "90%",
                        color: "#464646",
                        backgroundColor: "white",
                        border: "1px solid #b0b0b0",
                      }}
                      id={`dropdown-button-drop-down-centered`}
                      drop="down-centered"
                      variant=""
                      title="Size"
                    >
                      <Dropdown.Item eventKey="S">S</Dropdown.Item>
                      <Dropdown.Item eventKey="L">L</Dropdown.Item>
                      <Dropdown.Item eventKey="M">M</Dropdown.Item>
                      <Dropdown.Item eventKey="X">X</Dropdown.Item>
                      <Dropdown.Item eventKey="XL">XL</Dropdown.Item>
                    </SplitButton>

                    <textarea
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          sizes: e.target.value,
                        })
                      }
                      className="mt-4 ms-2"
                      style={{
                        width: "90%",
                        height: "100px",
                        border: "1px solid #ced4da",
                        borderRadius: "4px",
                        padding: "8px",
                      }}
                      placeholder="Enter text..."
                    />

                    <div
                      className="ms-2"
                      style={{
                        width: "90%",
                        borderTop: "1px dashed #999",
                        margin: "20px 0",
                      }}
                    ></div>

                    <p className="ms-2 mt-4" style={{ color: "#464646" }}>
                      <b>Options 2</b>{" "}
                      <Link
                        style={{ textDecoration: "none", color: "#0468d5" }}
                      >
                        Remove
                      </Link>
                    </p>

                    <SplitButton
                      className="ms-2"
                      style={{
                        width: "90%",
                        color: "#464646",
                        backgroundColor: "white",
                        border: "1px solid #b0b0b0",
                      }}
                      id={`dropdown-button-drop-down-centered`}
                      drop="down-centered"
                      variant=""
                      title="Size"
                    >
                      <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                      <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        Something else here
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </SplitButton>

                    <textarea
                      className="mt-4 ms-2"
                      style={{
                        width: "90%",
                        height: "100px",
                        border: "1px solid #ced4da",
                        borderRadius: "4px",
                        padding: "8px",
                      }}
                      placeholder="Enter text..."
                      readOnly
                    />

                    <Button
                      className="ms-2 mt-3"
                      variant="contained"
                      style={{
                        backgroundColor: "#f6f8fb",
                        color: "#0468d5",
                        height: "35px",
                        textTransform: "capitalize",
                        width: "90%",
                      }}
                    >
                      {" "}
                      Add another Option
                    </Button>
                  </div>
                </Col>
                <Col md={2}></Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default AddProduct;
