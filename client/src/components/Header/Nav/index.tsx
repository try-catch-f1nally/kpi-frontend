import React, {FC} from 'react';
import {Nav} from 'react-bootstrap';
import NavItem from './NavItem';

const NavList: FC = () => {
  return (
    <Nav className="align-self-start flex-md-row justify-content-md-between mt-md-2 mt-lg-0">
      <NavItem
        title="iPhone"
        allLink="/iphones"
        menuItems={[
          {name: 'iPhone 13 Pro Max', href: '/iphones?model=13ProMax'},
          {name: 'iPhone 13 Pro', href: '/iphones?model=13Pro'},
          {name: 'iPhone 13', href: '/iphones?model=13'},
          {name: 'iPhone 13 Mini', href: '/iphones?model=13Mini'},
          {name: 'iPhone 12 Pro Max', href: '/iphones?model=12ProMax'},
          {name: 'iPhone 12 Pro', href: '/iphones?model=12Pro'},
          {name: 'iPhone 12', href: '/iphones?model=12'},
          {name: 'iPhone 12 Mini', href: '/iphones?model=12Mini'},
          {name: 'iPhone 11', href: '/iphones?model=11'},
          {name: 'iPhone XR', href: '/iphones?model=xr'},
          {name: 'iPhone SE 2022', href: '/iphones?model=se2022'}
        ]}
      />
      <NavItem
        title="iPad"
        allLink="#"
        menuItems={[
          {name: 'Apple iPad', href: '#'},
          {name: 'Apple iPad Air', href: '#'},
          {name: 'Apple iPad Pro', href: '#'},
          {name: 'Apple iPad Mini', href: '#'}
        ]}
      />
      <NavItem
        title="Mac"
        allLink="#"
        menuItems={[
          {name: 'Macbook Pro', href: '#'},
          {name: 'Macbook Air', href: '#'},
          {name: 'Mac mini', href: '#'},
          {name: 'iMac', href: '#'},
          {name: 'Apple Mac Studio', href: '#'}
        ]}
      />
      <NavItem
        title="Apple Watch"
        allLink="#"
        menuItems={[
          {name: 'Apple Watch Series 7', href: '#'},
          {name: 'Apple Watch Series SE', href: '#'},
          {name: 'Apple Watch Series 6', href: '#'},
          {name: 'Apple Watch Series 3', href: '#'}
        ]}
      />
      <NavItem
        title="AirPods"
        allLink="#"
        menuItems={[
          {name: 'Apple AirPods', href: '#'},
          {name: 'Apple AirPods Pro', href: '#'},
          {name: 'Apple AirPods Max', href: '#'},
          {name: 'Colored AirPods', href: '#'},
          {name: 'AirPods Equipment', href: '#'}
        ]}
      />
      <NavItem
        title="Accessories"
        allLink="#"
        menuItems={[
          {name: 'Accessories for iPhone', href: '#'},
          {name: 'Accessories for iPad', href: '#'},
          {name: 'Accessories for Mac', href: '#'},
          {name: 'Accessories for AirPods', href: '#'},
          {name: 'Accessories for Watch', href: '#'}
        ]}
      />
    </Nav>
  );
};

export default NavList;
