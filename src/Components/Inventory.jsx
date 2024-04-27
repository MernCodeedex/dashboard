import React from "react";

function Inventory() {
  const sidebarStyle = {
    width: "200px",
    backgroundColor: "#f2f2f2",
    border: "1px solid #ddd",
  };

  const itemStyle = {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  };

  return (
    <div className="d-flex border">
      <div style={sidebarStyle}>
        <div style={itemStyle}>Item 1</div>
        <div style={itemStyle}>Item 2</div>
        <div style={itemStyle}>Item 3</div>
        <div style={itemStyle}>Item 4</div>
        <div style={itemStyle}>Item 5</div>
        <div style={itemStyle}>Item 6</div>
      </div>

      <div>
        <div className="d-flex">
          <div className="ms-3 mt-2">
            <label htmlFor="" className="mb-2">
              Regular Price
            </label>
            <input type="text" className="form-control" placeholder="$$$" />
          </div>
          <div className="ms-3 mt-2">
            <label htmlFor="" className="mb-2">
              Sales Price
            </label>
            <input type="text" className="form-control" placeholder="$$$" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
