import React, {FC} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import {Col, Container, Row, Spinner} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {useLogoutMutation} from '../../redux/auth/auth-api';
import {useAppSelector} from '../../hooks';
import {selectUserInfo} from '../../redux/auth/selectors';

const UserPage: FC = () => {
  const {firstName, lastName} = useAppSelector(selectUserInfo);
  const [logout, {isLoading}] = useLogoutMutation();
  const navigate = useNavigate();

  async function logoutHandler() {
    await logout();
    navigate('/');
  }

  return (
    <Container className="my-2 my-lg-4">
      <Row className="g-3 g-lg-4">
        <Col xs={12} sm={5} lg={3}>
          <Nav className="flex-column bg-dark rounded-1">
            <Nav.Item
              className="p-2 fs-5 text-center fw-bold border-bottom bi-person-fill"
              style={{letterSpacing: '1px'}}
            >
              &nbsp;{firstName + ' ' + lastName}
            </Nav.Item>
            <LinkContainer to="/user/orders">
              <Nav.Link className="bi-bag-check link-light"> My orders</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/user/account">
              <Nav.Link className="bi-sliders link-light"> Account settings</Nav.Link>
            </LinkContainer>
            <Nav.Link
              className="text-danger bi-box-arrow-right"
              onClick={logoutHandler}
              disabled={isLoading}
            >
              &nbsp;Log Out
              {isLoading && <Spinner className="ms-2" animation="border" variant="primary" size="sm"/>}
            </Nav.Link>
          </Nav>
        </Col>
        <Outlet/>
      </Row>
    </Container>
  );
};

export default UserPage;
