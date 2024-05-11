import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import { Col, DropdownItem, Form, Row } from "react-bootstrap";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import SplitButton from "react-bootstrap/SplitButton";
import { Dropdown } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import DropdownButton from "react-bootstrap/DropdownButton";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./Product.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function AddProduct() {
  const [editorValue, setEditorValue] = useState("");
  const [productDetails, setProductDetails] = useState({
    "Product_Name": "",
    "Description": "",
    "product_images": [],
    "sizes": "",
    "Gender": null,
    "Category": null,
    "Price": null,
    "Offer_Price": null,
    "Color": null,
    "Fabric_Type": "",
    "Fit_Type": "",
    "Waist_Rise": "",
    "Features": "",
    "Closure": "",
    "Length": "",
    "Fly_Type": "",
    "Tags": "",
    "Express_Delivery": false,
    "Pay_On_Delivery": false,
    "Exchange_Days": null
});
  console.log(productDetails);

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleGenderSelect = (eventKey) => {
    console.log("Selected gender:", eventKey);
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
      Tags: eventKey,
    });
  };
  const handleSizeSelect = (eventKey) => {
    setProductDetails({
      ...productDetails,
      sizes: eventKey,
    });
  };
  // const handleFileSelect = (event) => {
  //   setProductDetails({
  //     ...productDetails,
  //     product_images: Array.from(event.target.files),
  //   });
  // };

  //api to add products
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
    formData.append("Fabric_Type", productDetails.Fabric_Type);
    formData.append("Fit_Type", productDetails.Fit_Type);
    formData.append("Waist_Rise", productDetails.Waist_Rise);
    formData.append("Features", productDetails.Features);
    formData.append("Closure", productDetails.Closure);
    formData.append("Length", productDetails.Length);
    formData.append("Fly_Type", productDetails.Fly_Type);
    formData.append("Tags", productDetails.Tags);
  


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
          }).then(() => {
            // Refresh the page after the success message is dismissed
            window.location.reload();
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //sidebar style
  const sidebarStyle = {
    width: "200px",
    backgroundColor: "#f2f2f2",
    border: "1px solid #ddd",
    color: "#5b5a5a",
  };

  const itemStyle = {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    backgroundColor: "#f6f8fb",
  };
  const [selectedImages, setSelectedImages] = useState([]);

  const handleFileSelect = (event) => {
    const files = event.target.files;
    const fileObjects = Array.from(files);

    setSelectedImages(fileObjects);

    // Update productDetails with file objects
    setProductDetails({
      ...productDetails,
      product_images: fileObjects,
    });
  };

  const removeImage = (index) => {
    const newImages = [...selectedImages];
    newImages.splice(index, 1);
    setSelectedImages(newImages);

    // Also update productDetails if necessary
    setProductDetails({
      ...productDetails,
      product_images: newImages,
    });
  };

  const [fabric, setFabric] = useState("");
  const [otherFabric, setOtherFabric] = useState("");

  const handleFabricChange = (event) => {
    const selectedFabric = event.target.value;
    setFabric(selectedFabric);
    // Reset the otherFabric input when a different fabric is selected
    if (selectedFabric !== "other") {
      setOtherFabric("");
    }
    // Update the Fabric_Type property of productDetails
    setProductDetails({ ...productDetails, Fabric_Type: selectedFabric });
  };


  const [options, setOptions] = useState([
    { id: 1, name: "", value: "" }, // Initial option
  ]);

  // Function to handle changes in option name
  const handleOptionNameChange = (id, value) => {
    const updatedOptions = options.map((option) =>
      option.id === id ? { ...option, name: value } : option
    );
    setOptions(updatedOptions);
  };

  // Function to handle changes in option value
  const handleOptionValueChange = (id, value) => {
    const updatedOptions = options.map((option) =>
      option.id === id ? { ...option, value: value } : option
    );
    setOptions(updatedOptions);
  };

  for(let item of options){
    for (let key in productDetails){
     if(item.name==key){
         productDetails[key] = item.value
    }
    }
 }

  // Function to add a new option
  const addOption = () => {
    const newId = options.length + 1;
    setOptions([...options, { id: newId, name: "", value: "" }]);
  };

  // Function to remove an option
  const removeOption = (id) => {
    const updatedOptions = options.filter((option) => option.id !== id);
    setOptions(updatedOptions);
  };

  // Define the initial state and functions for options on the left side
  const [leftOptions, setLeftOptions] = useState([
    { id: 1, name: "", value: "" }, // Initial option
  ]);

  // Function to handle changes in option name on the left side
  const handleLeftOptionNameChange = (id, value) => {
    const updatedOptions = leftOptions.map((option) =>
      option.id === id ? { ...option, name: value } : option
    );
    setLeftOptions(updatedOptions);
  };

  // Function to handle changes in option value on the left side
  const handleLeftOptionValueChange = (id, value) => {
    const updatedOptions = leftOptions.map((option) =>
      option.id === id ? { ...option, value: value } : option
    );
    setLeftOptions(updatedOptions);
  };
  for(let item of leftOptions){
    for (let key in productDetails){
     if(item.name==key){
         productDetails[key] = item.value
    }
    }
 }

  // Function to add a new option on the left side
  const addLeftOption = () => {
    const newId = leftOptions.length + 1;
    setLeftOptions([...leftOptions, { id: newId, name: "", value: "" }]);
  };

  // Function to remove an option on the left side
  const removeLeftOption = (id) => {
    const updatedOptions = leftOptions.filter((option) => option.id !== id);
    setLeftOptions(updatedOptions);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Row></Row>

      <Row>
        <Col lg={2}>{/* <Sidebar ></Sidebar> */}</Col>

        <Col
          className="ms-2"
          style={{
            backgroundColor: "#f6f8fb",
            borderLeft: "1px solid #b6b6b5",
          }}
        >
          <Row>
            {" "}
            <Col className="addpd" md={4} style={{ marginTop: "5%" }}>
              <h3 className="ms-5 mt-5 text-black addpd">
                {" "}
                <b>Add a Product</b>
              </h3>
              <p
                className="ms-5"
                style={{
                  fontWeight: "500",
                  lineHeight: "3px",
                  color: "#828181",
                }}
              >
                Orders placed across your store
              </p>
            </Col>
            <Col md={3}> </Col>
            <Col md={5} className="mt-4">
              {" "}
              <Button
                variant="outlined"
                style={{
                  color: "black",
                  border: "1px solid #c5c5c5",
                  height: "35px",
                  textTransform: "capitalize",
                  marginTop: "12%",
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
                  marginTop: "12%",
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
                  marginTop: "12%",
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
                  height: "7vh",
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
  Display Image
</h5>
<div>
  <div className="imageContainer">
    {selectedImages.map((file, index) => (
      <div className="imgdiv" key={index}>
        <i
          className="fa-solid fa-xmark closeicon"
          onClick={() => removeImage(index)}
        ></i>{" "}
        <img
          className="subimage"
          src={URL.createObjectURL(file)}
          alt={`Image ${index}`}
        />
      </div>
    ))}
  </div>

  <div
    className="ms-5 mt-3"
    style={{
      paddingTop: "60px",
      border: "1px dashed ",
      width: "80%",
      height: "38vh",
      marginBottom: "10%",
      cursor: "pointer",
    }}
    onClick={() => document.getElementById("fileInput").click()}
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
</div>
             
              {/* <div className="ms-5 mt-3" style={{ width: "80%" }}>
                <Editor
                  editorState={editorState}
                  toolbar={{
                    options: ["history", "inline", "list", "textAlign", "link"],
                    inline: {
                      options: ["bold", "italic", "underline", "strikethrough"],
                    },
                    textAlign: {
                      options: ["left", "center", "right", "justify"],
                    },
                    list: {
                      options: ["unordered", "ordered"],
                    },
                  }}
                />
              </div>*/}
               <h5
                className="ms-5  text-black"
                style={{ WebkitTextStroke: ".6px" }}
              >
                Product Description
              </h5>
          
              <textarea
                className="ms-5 mt-2 "
                onChange={(e) =>
                  setProductDetails({
                    ...productDetails,
                    Description: e.target.value,
                  })
                }
                style={{
                  width: "80%",
                  marginTop: "-40px",
                  flex: 1,
                  fontSize: ".8rem",
                  borderRadius: "5px",
                  border: "1px solid #c5c5c5",
                  padding: "10px",
                  boxSizing: "border-box",
                  height: "28vh",
                }}
                placeholder="Write a description here..."
              /> 
              {/* <ReactQuill
                style={{ width: "80%", marginLeft: "47px", height: "150px" }}
                value={editorValue}
                onChange={(content, delta, source, editor) => {
                  setEditorValue(content);
                  setProductDetails({
                    ...productDetails,
                    Description: content,
                  });
                }}
                modules={{
                  toolbar: [
                    [{ header: [1, 2, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ align: [] }],
                    ["list", "bullet"],
                    ["link"],
                    ["history"],
                  ],
                }}
                theme="snow"
              /> */}
              <div className="mt-5 ">
                {leftOptions.map((option) => (
                  <div key={option.id} className="option">
                    <h5
                      className=" ms-2 "
                      style={{ color: "#464646", marginTop: "15%" }}
                    >
                      <b className="" style={{ marginLeft: "40px" }}>Options {option.id}</b>
                      {leftOptions.length > 1 && (
                        <Link
                          style={{
                            textDecoration: "none",
                            color: "#0468d5",
                            marginLeft: "10px",
                            fontSize: "15px",
                          }}
                          onClick={() => removeLeftOption(option.id)}
                        >
                          Remove
                        </Link>
                      )}
                    </h5>
                    <div className="form-group p-2">
                      <Form.Select
                        style={{ width: "83%", marginLeft: "38px" }}
                        id={`dropdown-button-drop-down-centered-${option.id}`}
                        onChange={(e) =>
                          handleLeftOptionNameChange(option.id, e.target.value)
                        }
                      >
                        <option>Select One</option>
                        <option value='Fit_Type'>Fit</option>
                        <option value='Features'>Features</option>
                        <option value='Waist_Rise'>Waist Rise</option>
                        <option value='Fly_Type'>Fly Type</option>
                        <option value='Length'>Length</option>
                        <option value='Closure'>Closure</option>
                        <option value='sizes'>Size & Fit</option>
                        {/* <option value='Fabric_Type'>Material & Care</option> */}
                      </Form.Select>
                    </div>

                    <textarea
                      onChange={(e) =>
                        handleLeftOptionValueChange(option.id, e.target.value)
                      }
                      className="mt-4 "
                      style={{
                        width: "81%",
                        height: "100px",
                        border: "1px solid #ced4da",
                        borderRadius: "4px",
                        padding: "8px",
                        marginLeft: "48px",
                      }}
                      placeholder="Enter text..."
                    />
                  </div>
                ))}

                <Button
                  className=" mt-3"
                  variant="contained"
                  style={{
                    backgroundColor: "#f6f8fb",
                    color: "#0468d5",
                    height: "35px",
                    textTransform: "capitalize",
                    width: "81%",
                    marginLeft: "50px",
                  }}
                  onClick={addLeftOption}
                >
                  Add another Option
                </Button>
              </div>

              <h5
                className="ms-5  mt-5 text-black"
                style={{ WebkitTextStroke: ".6px" }}
              >
                Inventory
              </h5>
              <div className="ms-5 mt-3" style={{width:"81%"}}>
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
                      <div className="ms-4 mt-2">
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
                      <b>Gender</b>{" "}
                      <Link
                        style={{ textDecoration: "none", color: "#0468d5" }}
                      >
                        Add new category
                      </Link>
                    </p>

                    <div className="form-group p-2">
                      <Form.Select
                        onChange={(e) => handleGenderSelect(e.target.value)}
                      >
                        <option value="">Select One</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="boy">Boy</option>
                        <option value="girl">Girl</option>
                      </Form.Select>
                    </div>

                    <p className="ms-2 mt-4" style={{ color: "#464646" }}>
                      <b> Category</b>{" "}
                      <Link
                        style={{ textDecoration: "none", color: "#0468d5" }}
                      >
                        {" "}
                        Add newVendor
                      </Link>
                    </p>

                    <div className="form-group p-2">
                      <Form.Select
                        id={`dropdown-button-drop-down-centered`}
                        onChange={(e) => handleCategorySelect(e.target.value)}
                      >
                        <option>Select One</option>
                        <option value="shirts">Shirt</option>
                        <option value="pants">Pant</option>
                        <option value="shoes">Shoes</option>
                        <option value="accessories">Accessories</option>
                      </Form.Select>
                    </div>
                    <p className="ms-2 mt-4" style={{ color: "#464646" }}>
                      <b>Fabric Details</b>
                    </p>

                    <div className="form-group p-2">
  <Form.Select
    id="fabricSelect"
    onChange={(e) => handleFabricChange(e)}
    value={fabric}
  >
    <option>Select One</option>
    <option value='cotton'>Cotton</option>
    <option value='silk'>Silk</option>
    <option value='polyester'>Polyester</option>
    <option value='nylon'>Nylon</option>
    {/* <option value='other'>Other</option> */}
  </Form.Select>

  {/* Render the input field only when "Other" is selected */}
  {fabric === "other" && (
    <div>
      <label htmlFor="otherFabricInput">
        Other Fabric:
      </label>
      <input
        id="otherFabricInput"
        type="text"
        value={otherFabric}
        onChange={(event) =>
          setOtherFabric(event.target.value)
        }
        placeholder="Enter fabric name"
      />
    </div>
  )}
</div>

                    <p className="ms-2 mt-4" style={{ color: "#464646" }}>
                      <b> Tags</b>{" "}
                      <Link
                        style={{ textDecoration: "none", color: "#0468d5" }}
                      >
                        View all tags
                      </Link>
                    </p>

                    <div className="form-group p-2">
                      <Form.Select
                        id={`dropdown-button-drop-down-centered`}
                        onChange={(e) => handleTagSelect(e.target.value)}
                      >
                        <option>Color</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="yellow">Yellow</option>
                      </Form.Select>
                    </div>
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
                    {options.map((option) => (
                      <div key={option.id}>
                        <h5 className="mt-2 ms-2" style={{ color: "#464646" }}>
                          <b>Options {option.id}</b>
                          {options.length > 1 && (
                            <Link
                              style={{
                                textDecoration: "none",
                                color: "#0468d5",
                                marginLeft: "10px",
                                fontSize: "15px",
                              }}
                              onClick={() => removeOption(option.id)}
                            >
                              Remove
                            </Link>
                          )}
                        </h5>
                        <div className="form-group p-2">
                          <Form.Select
                            id={`dropdown-button-drop-down-centered-${option.id}`}
                            onChange={(e) =>
                              handleOptionNameChange(option.id, e.target.value)
                            }
                          >
                            <option>Select One</option>
                            {/* <option value='size'>Size</option> */}
                            <option value='Color'>Color</option>
                            {/* <option value='weight'>Weight</option>
                            <option value='smell'>Smell</option>
                            <option value='other'>Other</option> */}
                          </Form.Select>
                        </div>

                        <textarea
                          onChange={(e) =>
                            handleOptionValueChange(option.id, e.target.value)
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
                      </div>
                    ))}

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
                      onClick={addOption}
                    >
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
