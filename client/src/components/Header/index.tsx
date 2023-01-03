import React, {FC} from 'react';
import {Button, Container, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Search, Cart, SignUp} from './Modals';
import NavList from './Nav';
import LogInPopover from './LogInPopover';
import UserDropdown from './UserDropdown';
import {useAppSelector} from '../../hooks';
import {selectIsAuth} from '../../redux/auth/selectors';

const Header: FC = () => {
  const isAuth = useAppSelector(selectIsAuth);
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="text-decoration-none text-light fs-3">
            <span className="text-primary fw-bold">i</span>Gadgets
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbar-nav"/>
        <Navbar.Collapse id="navbar-nav">
          <hr className="d-lg-none text-light my-1"/>
          <div className="d-flex flex-column-reverse justify-content-between flex-lg-row w-100">
            <NavList/>
            <div className="d-flex justify-content-center align-items-center">
              <Search/>
              <Button
                href="tel:0-800-707-07-07"
                variant="link"
                className="bi-telephone fs-4 p-1 py-0 mx-1"
              />
              <Cart/>
              {isAuth && <UserDropdown/>}
              {!isAuth && <SignUp/>}
              {!isAuth && <LogInPopover/>}
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
