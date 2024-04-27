import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";

function Sidebar() {
  const [show, setShow] = useState(false);
  const [showEcommerceDropdown, setShowEcommerceDropdown] = useState(false);
  const [showCutomerDropdown, setShowCustomerDropdown] = useState(false);
  const [showAdminDropdown, setShowAdminDropdown] = useState(false);
  const [clickedElement, setClickedElement] = useState(null);
  const [showAddProductsDropdown, setShowAddProductsDropdown] = useState(false);
  const [isEcommerceDropdownUp, setIsEcommerceDropdownUp] = useState(false);
  const [isAdminDropdownUp, setIsAdminDropdownUp] = useState(false);
  const [isCustomerDropdownUp, setIsCustomerdownUp] = useState(false);
  const [isCollapsedViewClicked, setIsCollapsedViewClicked] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleEcommerceDropdown = () => {
    setShowEcommerceDropdown(!showEcommerceDropdown);
    setIsEcommerceDropdownUp(!isEcommerceDropdownUp);

    setShowAdminDropdown(false);
    setShowCustomerDropdown(false);
    setShowAddProductsDropdown(false);
  };

  const toggleAdminDropdown = () => {
    setShowAdminDropdown(!showAdminDropdown);
    setIsAdminDropdownUp(!isAdminDropdownUp);
  };

  const toggleCustomerDropdown = () => {
    setShowCustomerDropdown(!showCutomerDropdown);
    setIsCustomerdownUp(!showCutomerDropdown);
  };

  const toggleAddProductsDropdown = () => {
    setShowAddProductsDropdown(!showAddProductsDropdown);
  };

  const navigate = useNavigate();

  const handleCollapsedViewClick = () => {
    setIsCollapsedViewClicked(!isCollapsedViewClicked);
    setShowEcommerceDropdown(false);
    setShowCustomerDropdown(false);
    setShowAdminDropdown(false);
    setShowAddProductsDropdown(false);
  };

  return (
    <div className="" style={{ backgroundColor: "white", position: "fixed" }}>
      <Button
        variant="secondary"
        className="d-lg-none"
        onClick={handleShow}
        style={{
          position: "absolute",
          left: "10px",
          top: "-45px",
          color: "black",
          backgroundColor: "#e2e2e1",
        }}
      >
        <i className="fa-solid fa-bars text-darks"></i>
      </Button>

      <Offcanvas
        style={{ width: "230px" }}
        className={" h-100"}
        show={show}
        onHide={handleClose}
        responsive="lg sm "
      >
        <Offcanvas.Body className="ps-5 pe-3  flex-column text-align-justify">
          <Link
            style={{ color: "#454545" }}
            className="w-100 side-menu text-start mb-2 h-5 text-decoration-none d-block  mt-4 d-flex"
          >
            <i className="fa-solid fa-caret-right me-2"> </i>{" "}
            <UpdateOutlinedIcon /> Home
          </Link>
          <span
            style={{ color: clickedElement === "apps" ? "blue" : "#454545" }}
            onClick={() => setClickedElement("apps")}
            className="w-50 side-menu text-start mb-2 h-5 text-decoration-none d-block "
          >
            Apps
          </span>

          <div
            className="w-100 side-menu text-start mb-2 h-5 text-decoration-none d-block "
            style={{ color: "#454545" }}
          >
            {isEcommerceDropdownUp ? (
              <ArrowDropUpIcon onClick={toggleEcommerceDropdown} />
            ) : (
              <ArrowDropDownIcon onClick={toggleEcommerceDropdown} />
            )}{" "}
            <ShoppingCartOutlinedIcon /> Ecommerce
          </div>

          {showEcommerceDropdown && (
            <div
              className="w-100 side-menu text-start mb-2 h-5 text-decoration-none d-block ms-4 "
              style={{ color: "#454545" }}
            >
              {isAdminDropdownUp ? (
                <ArrowDropUpIcon onClick={toggleAdminDropdown} />
              ) : (
                <ArrowDropDownIcon onClick={toggleAdminDropdown} />
              )}{" "}
              Admin
            </div>
          )}

          {showAdminDropdown && (
            <div className="w-100 side-menu text-start mb-2 h-5 text-decoration-none d-block ms-4">
              <Link
                className="ms-5"
                style={{
                  color: clickedElement === "addpd" ? "blue" : "#454545",
                  textDecoration: "none",
                }}
                onClick={() => setClickedElement("addpd")}
              >
                {" "}
                Add Product
              </Link>
            </div>
          )}

          {showAdminDropdown && (
            <div className="w-100 side-menu text-start mb-2 h-5 text-decoration-none d-block ms-4">
              <Link
                className="ms-5"
                style={{
                  color: clickedElement === "product" ? "blue" : "#454545",
                  textDecoration: "none",
                }}
                onClick={() => setClickedElement("product")}
              >
                Products
              </Link>
            </div>
          )}
          {showAdminDropdown && (
            <div className="w-100 side-menu text-start mb-2 h-5 text-decoration-none d-block ms-4">
              <Link
                className="ms-5"
                style={{
                  color: clickedElement === "customer" ? "blue" : "#454545",
                  textDecoration: "none",
                }}
                onClick={() => setClickedElement("customer")}
              >
                Customers
              </Link>
            </div>
          )}
          {/* {showAdminDropdown && ( 
            <div className="w-100 side-menu text-start mb-3 h-5 text-decoration-none d-block ms-4">
              <Link className='ms-4' style={{ color: clickedElement === 'customer detail' ? 'blue' : '#454545',textDecoration:"none" }}  onClick={() => setClickedElement('customer detail')}> Customer details</Link> 
            
            </div>
          )} */}
          {showAdminDropdown && (
            <div className="w-100 side-menu text-start mb-2 h-5 text-decoration-none d-block ms-4">
              <Link
                className="ms-5"
                style={{
                  color: clickedElement === "orders" ? "blue" : "#454545",
                  textDecoration: "none",
                }}
                onClick={() => setClickedElement("orders")}
              >
                {" "}
                Orders
              </Link>
            </div>
          )}
          {showAdminDropdown && (
            <div className="w-100 side-menu text-start mb-2 h-5 text-decoration-none d-block ms-4">
              <Link
                className="ms-5"
                style={{
                  color:
                    clickedElement === "order details" ? "blue" : "#454545",
                  textDecoration: "none",
                }}
                onClick={() => setClickedElement("order details")}
              >
                {" "}
                Order details
              </Link>
            </div>
          )}
          {showAdminDropdown && (
            <div className="w-100 side-menu text-start mb-2 h-5 text-decoration-none d-block ms-4">
              <Link
                className="ms-5"
                style={{
                  color: clickedElement === "refund" ? "blue" : "#454545",
                  textDecoration: "none",
                }}
                onClick={() => setClickedElement("refund")}
              >
                {" "}
                Refund
              </Link>
            </div>
          )}

          {showEcommerceDropdown && (
            <div
              className="w-100 side-menu text-start mb-2 h-5 text-decoration-none d-block ms-4 "
              style={{ color: "#454545" }}
            >
              {isCustomerDropdownUp ? (
                <ArrowDropUpIcon onClick={toggleCustomerDropdown} />
              ) : (
                <ArrowDropDownIcon onClick={toggleCustomerDropdown} />
              )}{" "}
              Customer
            </div>
          )}

          {showCutomerDropdown && (
            <div className="w-100 side-menu text-start mb-2 h-5 text-decoration-none d-block ms-4">
              <Link
                className="ms-5"
                style={{
                  color: clickedElement === "home" ? "blue" : "#454545",
                  textDecoration: "none",
                }}
                onClick={() => setClickedElement("home")}
              >
                {" "}
                Homepage
              </Link>
            </div>
          )}

          {showCutomerDropdown && (
            <div className="w-100 side-menu text-start mb-2 h-5 text-decoration-none d-block ms-4">
              <Link
                className="ms-5"
                style={{
                  color:
                    clickedElement === "product details" ? "blue" : "#454545",
                  textDecoration: "none",
                }}
                onClick={() => setClickedElement("product details")}
              >
                Product details
              </Link>
            </div>
          )}
          {showCutomerDropdown && (
            <div className="w-100 side-menu text-start mb-2 h-5 text-decoration-none d-block ms-4">
              <Link
                className="ms-5"
                style={{
                  color:
                    clickedElement === "product filter" ? "blue" : "#454545",
                  textDecoration: "none",
                }}
                onClick={() => setClickedElement("product filter")}
              >
                Products filter
              </Link>
            </div>
          )}
          {showCutomerDropdown && (
            <div className="w-100 side-menu text-start mb-2 h-5 text-decoration-none d-block ms-4">
              <Link
                className="ms-5"
                style={{
                  color: clickedElement === "cart" ? "blue" : "#454545",
                  textDecoration: "none",
                }}
                onClick={() => setClickedElement("cart")}
              >
                {" "}
                Cart
              </Link>
            </div>
          )}
          {showCutomerDropdown && (
            <div className="w-100 side-menu text-start mb-2 h-5 text-decoration-none d-block ms-4">
              <Link
                className="ms-5"
                style={{
                  color: clickedElement === "checkout" ? "blue" : "#454545",
                  textDecoration: "none",
                }}
                onClick={() => setClickedElement("checkout")}
              >
                Checkout
              </Link>
            </div>
          )}
          {showCutomerDropdown && (
            <div className="w-100 side-menu text-start mb-2 h-5 text-decoration-none d-block ms-4">
              <Link
                className="ms-5"
                style={{
                  color:
                    clickedElement === "Shipping info" ? "blue" : "#454545",
                  textDecoration: "none",
                }}
                onClick={() => setClickedElement("Shipping info")}
              >
                Shipping Info
              </Link>
            </div>
          )}
          {showCutomerDropdown && (
            <div className="w-100 side-menu text-start mb-2 h-5 text-decoration-none d-block ms-4">
              <Link
                className="ms-5"
                style={{
                  color: clickedElement === "profile" ? "blue" : "#454545",
                  textDecoration: "none",
                }}
                onClick={() => setClickedElement("profile")}
              >
                Profile
              </Link>
            </div>
          )}
          <hr />

          <div
            className="w-100 side-menu text-start mb-2 h-5 text-decoration-none d-block "
            style={{ color: "#454545" }}
            onClick={handleCollapsedViewClick}
          >
            <ReplyAllIcon /> Collapsed View
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Sidebar;
