import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Users from './Components/Users';
import UserForm from './Components/UserForm';
import { v1 as uuid } from 'uuid'

const App = () => {
  const [users, setUsers] = useState([
    {
      name: 'Bernard',
      email: 'bernard@domainname.com',
      gen: 24,
      id: 're4er56erf'
    },
    {
      name: 'Emmanuel',
      email: 'emmanuel@domainname.com',
      gen: 24,
      id: 'ythhk9087'
    },
    {
      name: 'Faisal',
      email: 'faisal@domainname.com',
      gen: 24,
      id: 'yti7i90ujj'
    },
  ]);

  const addNewUser = (user) => {
    user.id = uuid();
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    const remainingUsers = users.filter((user) => user.id !== id);
    setUsers(remainingUsers);
  };

  const editUser = (id, newInfo) => {
    setUsers(users.map((user) => (user.id === id ? newInfo : user)));
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} sm={2}>
            <UserForm addUser={addNewUser} />
          </Col>
          <Col xs={12} sm={10}>
            <Users usersData={users} deleteUser={deleteUser} editUser={editUser} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;

