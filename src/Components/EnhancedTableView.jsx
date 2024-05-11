import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { Table, Container, Pagination, Form, Row, Col } from "react-bootstrap";
import "./Table.css";

export default function EnhancedTable() {
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [dense, setDense] = useState(false);

  const rows = [
    {
      id: 1,
      order: "#2453",
      total: 305,
      customer: "John Doe",
      paymentStatus: "COMPLETE",
      fulfilmentStatus: "CANCELLED",
      deliveryType: "Cash on delivery",
      date: "Dec 1 2024",
    },
    {
      id: 2,
      order: "#2454",
      total: 305,
      customer: "John ",
      paymentStatus: "COMPLETE",
      fulfilmentStatus: "CANCELLED",
      deliveryType: "Cash on delivery",
      date: "Dec 1 2024",
    },
    {
      id: 3,
      order: "#2455",
      total: 305,
      customer: " Doe",
      paymentStatus: "COMPLETE",
      fulfilmentStatus: "CANCELLED",
      deliveryType: "Cash on delivery",
      date: "Dec 1 2024",
    },
    {
      id: 4,
      order: "#2456",
      total: 305,
      customer: "John D",
      paymentStatus: "COMPLETE",
      fulfilmentStatus: "CANCELLED",
      deliveryType: "Cash on delivery",
      date: "Dec 1 2024",
    },
    {
      id: 5,
      order: "#2457",
      total: 305,
      customer: "John Do",
      paymentStatus: "COMPLETE",
      fulfilmentStatus: "CANCELLED",
      deliveryType: "Cash on delivery",
      date: "Dec 1 2024",
    },
    {
      id: 6,
      order: "#2458",
      total: 305,
      customer: "JoDoe",
      paymentStatus: "COMPLETE",
      fulfilmentStatus: "CANCELLED",
      deliveryType: "Cash on delivery",
      date: "Dec 1 2024",
    },
    {
      id: 7,
      order: "#2459",
      total: 305,
      customer: "Joh",
      paymentStatus: "COMPLETE",
      fulfilmentStatus: "CANCELLED",
      deliveryType: "Cash on delivery",
      date: "Dec 1 2024",
    },
    {
      id: 8,
      order: "#2460",
      total: 305,
      customer: "Joe",
      paymentStatus: "COMPLETE",
      fulfilmentStatus: "CANCELLED",
      deliveryType: "Cash on delivery",
      date: "Dec 1 2024",
    },
    {
      id: 9,
      order: "#2461",
      total: 305,
      customer: "Jooe",
      paymentStatus: "COMPLETE",
      fulfilmentStatus: "CANCELLED",
      deliveryType: "Cash on delivery",
      date: "Dec 1 2024",
    },
    {
      id: 10,
      order: "#2462",
      total: 305,
      customer: "Jo Doe",
      paymentStatus: "COMPLETE",
      fulfilmentStatus: "CANCELLED",
      deliveryType: "Cash on delivery",
      date: "Dec 1 2024",
    },

    // Add your other rows here
  ];

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  return (
    <div style={{ overflowX: "auto" }}>
      <Container fluid>
        <Table style={{ backgroundColor: "white" }}>
          <thead>
            <tr>
              <th>
                <Form.Check
                  type="checkbox"
                  id="selectAll"
                  checked={selected.length === rows.length}
                  onChange={handleSelectAllClick}
                />
              </th>
              <th className="theading">ORDER</th>
              <th className="theading">TOTAL</th>
              <th className="theading">CUSTOMER</th>
              <th className="theading">PAYMENT STATUS</th>
              <th className="theading">FULFILMENT STATUS</th>
              <th className="theading">DELIVERY TYPE</th>
              <th className="theading">DATE</th>
            </tr>
          </thead>
          <tbody>
            {rows
              .slice(
                (page - 1) * rowsPerPage,
                (page - 1) * rowsPerPage + rowsPerPage
              )
              .map((row) => {
                const isItemSelected = isSelected(row.id);

                return (
                  <tr
                    key={row.id}
                    onClick={() => handleClick(row.id)}
                    className={isItemSelected ? "table-active" : ""}
                  >
                    <td>
                      <Form.Check
                        type="checkbox"
                        id={`row-${row.id}`}
                        checked={isItemSelected}
                      />
                    </td>
                    <td className="tdetails">{row.order}</td>
                    <td className="tdetails">{row.total}</td>
                    <td className="tdetails">
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          src="https://www.pngitem.com/pimgs/m/404-4042710_circle-profile-picture-png-transparent-png.png"
                          sx={{ mr: 2 }}
                        />
                        {row.customer}
                      </div>
                    </td>
                    <td className="tdetails ">
                      <span
                        style={{
                          backgroundColor: "#7cfa74",
                          padding: "5px",
                          color: "#2c6c3c",
                        }}
                      >
                        {row.paymentStatus}✓
                      </span>
                    </td>
                    <td className="tdetails">
                      <span
                        style={{
                          backgroundColor: "#d96262",
                          color: "#731818",
                          padding: "5px",
                        }}
                      >
                        {row.fulfilmentStatus}❌
                      </span>
                    </td>
                    <td className="tdetails">{row.deliveryType}</td>
                    <td className="tdetails">{row.date}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        <Row>
          <Col>
            <Pagination>
              <Pagination.Prev
                onClick={() => handleChangePage(page - 1)}
                disabled={page === 1}
              />
              <Pagination.Next
                onClick={() => handleChangePage(page + 1)}
                disabled={page * rowsPerPage >= rows.length}
              />
            </Pagination>
          </Col>
          <Col className="text-end">
            <Form.Group controlId="rowsPerPageSelect">
              <Form.Control
                as="select"
                value={rowsPerPage}
                onChange={(e) => handleChangeRowsPerPage(e)}
              >
                {[5, 10, 25].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Check
              type="switch"
              id="denseSwitch"
              label="Dense padding"
              checked={dense}
              onChange={handleChangeDense}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
