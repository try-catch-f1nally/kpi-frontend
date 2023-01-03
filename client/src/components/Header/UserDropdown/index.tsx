import React, {FC} from 'react';
import {Dropdown, Spinner} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {useLogoutMutation} from '../../../redux/auth/auth-api';
import {useAppSelector} from '../../../hooks';
import {useNavigate} from 'react-router-dom';
import {selectUserInfo} from '../../../redux/auth/selectors';

const UserDropdown: FC = () => {
  const navigate = useNavigate();
  const dropdownItems = [
    {href: '/orders', iconClass: 'bi-bag-check', name: 'My orders'},
    {href: '/account', iconClass: 'bi-sliders', name: 'Settings'}
  ];

  const [logout, {isLoading}] = useLogoutMutation();
  const {firstName} = useAppSelector(selectUserInfo);

  async function logoutHandler() {
    await logout();
    navigate('/');
  }

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="outline-primary"
        className="fs-5 ms-3 bi-person-fill"
        size="sm"
        disabled={isLoading}
      >
        &nbsp;{firstName}
        {isLoading && <Spinner className="ms-2" animation="border" variant="primary" size="sm"/>}
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark" className="mt-1">
        {dropdownItems.map(({href, iconClass, name}) =>
          <LinkContainer to={'/user' + href} key={name}>
            <Dropdown.Item className={'text-decoration-none text-light ' + iconClass}>
              &nbsp;{name}
            </Dropdown.Item>
          </LinkContainer>
        )}
        <Dropdown.Divider/>
        <Dropdown.Item className="text-danger bi-box-arrow-right" onClick={logoutHandler}>
          &nbsp;Log Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserDropdown;
