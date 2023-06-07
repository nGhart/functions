import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleUser from './SingleUser';

const Users = (props) => {
    return (
        <Container>
            <Row>
                <h1 className='users'>Users</h1>
                <Col className='userDisplay'>
                    {props.usersData.map((user) => {
                        return <SingleUser userInfo={user} key={user.id} deleteUser={props.deleteUser} editUser={props.editUser} />
                    })
                    }
                </Col>
            </Row>
        </Container>
    )
}


export default Users;