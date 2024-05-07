import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Card, Pagination, Row, Col, Form, Button} from 'react-bootstrap';
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import './CusDet.css'
import Header from '../Components/Header';

const CustomerDetails = ({ onChange, onUserDelete}) => {

  const { userId } = useParams();
  console.log("User ID from URL:", userId);

  const [userData, setUserData] = useState({})
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 1; 
  const totalPages = 4;
  const [editMode, setEditMode] = useState(false);
  const [editedAddress, setEditedAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [newNote, setNewNote] = useState('');
  // const [confirmDelete, setConfirmDelete] = useState(false)

  const [selectedUser, setSelectedUser] = useState(null);
  
  const users = [
    { id: 1, name: 'User 1'},
    { id: 2, name: 'User 2' },
    { id: 3, name: 'User 3' },
    { id: 4, name: 'User 4' }
  ];

  useEffect(() => {
    const currentUserId = parseInt(userId);
    setCurrentPage(currentUserId);

    const fetchUserProfile = async () => {
      setLoading(true);
      try {
        const offset = (currentPage - 1) * usersPerPage;
        console.log("Fetching user profile for user ID:", selectedUser); 
        const response = await axios.get(`https://praveencodeedex24.pythonanywhere.com/api/userprofile/${userId}/?offset=${offset}&limit=${usersPerPage}`);
        console.log("Response data:", response.data);
        setUserData(response.data.user_data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchUserProfile(); 
  }, [selectedUser, currentPage]);

  const handleNextPage = () => {
    const nextUserId = parseInt(userId) + 1;
    if (nextUserId <= totalPages) {
      window.location.href = `/user/${nextUserId}`;
      setSelectedUser(nextUserId);
      setCurrentPage(currentPage + 1);
    }
  };
  
  const handlePrevPage = () => {
    const prevUserId = parseInt(userId) - 1;
    if (prevUserId >= 1) {
        console.log(`Navigating to previous user ID: ${prevUserId}`);
      window.location.href = `/user/${prevUserId}`;
      setSelectedUser(prevUserId);
      setCurrentPage(currentPage - 1);
    }
  };
  
  
  console.log('Current Page:', currentPage);
  

  // useEffect(() => {
  //   if (nextUserId !== null) {
  //     const fetchNextUserProfile = async () => {
  //       setLoading(true);
  //       try {
  //         const response = await axios.get(`http://localhost:5000/api/userprofile/${nextUserId}`);
  //         console.log("Next User Profile data:", response.data);
  //         setUserData(response.data.user_data);
  //         setLoading(false);
  //         setSelectedUser(nextUserId); 
  //       } catch (error) {
  //         console.error("Error fetching next user data: ", error);
  //         setLoading(false);
  //       }
  //     };

  //     fetchNextUserProfile();
  //   }
  // }, [nextUserId]);


  // const handlePagination = () => {
  //   const nextId = userId + 1;
  //   console.log("Next user ID:", nextId);
  //   setNextUserId(nextId); 
  // };
  
  const handleEditClick = () => {
    setEditMode(true);
    setEditedAddress(userData.address2 || '');
  };

  const handleSaveClick = () => {
    setEditMode(false);
    setUserData(prevData => ({
        ...prevData,
        address2: editedAddress
    }));
  };
  
  const handleAddNote = () => {
    setNotes(prevNotes => [...prevNotes, newNote]);
    setNewNote('');
  };
  
  const deleteUser = ()=>{
    if(window.confirm('Are you sure you want to delete this user?')){
      onUserDelete(userId);
    }
  }
  // const handleUserSelect = (userId) => {
  //   setSelectedUser(userId);
  // };
  // const handleUserChange = (userId) => {
  //   setSelectedUser(userId);
  // };
  // const handleUserDelete = (userId) => {
  //   console.log(`Deleting user with ID: ${userId}`);
  // };
  
  return (
    <div>
        <Header></Header>
        
      <Container className='pt-5 user-container'>
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h2>User Profile</h2>
          <Button onClick={deleteUser} variant="danger"> <RiDeleteBinLine /> Delete User</Button>
        </Card.Header>
        <Card.Body>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <Row>
              <Col md={6}>
                <Card>
                  <Card.Body className='card-one'>
                    <div className="user-card">
                      <div className="user-info">
                        <img src={'https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg'} alt="User" />
                      </div>
                      <div className="user-name">
                        <h3>Name: {userData.username || "User"}</h3 >
                        <p>Joined 3 months ago</p>
                      </div>
                      <div className="dotted-line"></div>
                    </div>
                    <div className="user-det">
                      <div className="user-follo">
                        <h6>Following</h6>
                        <p>297</p>
                      </div>
                      <div className="user-pro">
                        <h6>Projects</h6>
                        <p>56</p>
                      </div>
                      <div className="user-com">
                        <h6>Completion</h6>
                        <p>97</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card>
                  <Card.Body>
                    <div className="user-details">
                      <div className="detail-line">
                        <h3>Default Address</h3>
                        {editMode ? (
                          <Button variant="primary" onClick={handleSaveClick}>Save</Button>
                        ) : (
                            <FiEdit3 onClick={handleEditClick} />
                          )}
                      </div>
                      <div className="detail-line">
                        <p><strong>Address:</strong></p>
                      </div>
                      <div className="detail-line">
                        {editMode ? (
                          <input type="text" value={editedAddress} onChange={(e) => setEditedAddress(e.target.value)} />
                        ) : (
                            <p>{userData.address2 || "ABC Street, Fake Place"}</p>
                          )}
                      </div>
                      <div className="detail-line">
                        <p><strong>Email:</strong></p>
                      </div>
                      <div className="detail-line">
                        <p><a href={`mailto:${userData.email}`}>{userData.email}</a></p>
                      </div>
                      <div className="detail-line">
                        <p><strong>Phone:</strong></p>
                      </div>
                      <div className="detail-line">
                        <p>{userData.mobile}</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          )}
          <div className="last-card">
            <Card>
              <Card.Body>
                <div className="card-notes">
                  <h3>Notes on User</h3>
                  <Form.Control as="textarea" rows={3} value={newNote} onChange={(e) => setNewNote(e.target.value)} placeholder='Add new notes..' />
                  <Button variant="primary" className="mt-3" onClick={handleAddNote} style={{ width: '100%' }}>Add Note</Button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Card.Body>
      </Card>
      <Pagination className="mt-4">
      <Pagination.Prev disabled={currentPage === 1} onClick={handlePrevPage} />
        <Pagination.Next disabled={currentPage === totalPages} onClick={handleNextPage} />
      </Pagination>
    </Container>
    </div>
  )
}

export default CustomerDetails

