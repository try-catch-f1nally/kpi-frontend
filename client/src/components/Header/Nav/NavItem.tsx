import React, {FC} from 'react';
import {NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

interface NavItemProps {
  title: string,
  allLink: string,
  menuItems: Array<{
    name: string,
    href: string
  }>
}

const NavItem: FC<NavItemProps> = ({title, allLink, menuItems}) => {
  return (
    <NavDropdown title={title} menuVariant="dark">
      <LinkContainer to={allLink}>
        <NavDropdown.Item className="text-light text-decoration-none">
          All
        </NavDropdown.Item>
      </LinkContainer>

      <NavDropdown.Divider/>

      {menuItems.map(item =>
        <LinkContainer to={item.href} key={item.name}>
          <NavDropdown.Item className="text-light text-decoration-none">
            {item.name}
          </NavDropdown.Item>
        </LinkContainer>
      )}
    </NavDropdown>
  );
};

export default NavItem;
