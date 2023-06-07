import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Edit from './Edit';

function SingleUser(props) {
  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteUser(props.userInfo.id)
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Edit userInfo={props.userInfo} editUser={props.editUser} closeModal={handleClose} />
        </Modal.Body>
      </Modal>
      <Card className='box'>
        <Card.Body>
          <Card.Title>
            Name: {props.userInfo.name}
          </Card.Title>
          <Card.Text>
            Email: {props.userInfo.email}
          </Card.Text>
          <Card.Text>
            Gen: {props.userInfo.gen}
          </Card.Text>
          <div className='userModification'>
            <Button variant="primary" className='userButton' onClick={handleShow}>Edit</Button>
            <Button variant="primary" className='userButton' onClick={handleDelete}>Delete</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleUser