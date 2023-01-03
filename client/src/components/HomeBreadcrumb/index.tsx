import React, {FC} from 'react';
import {Breadcrumb} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

interface HomeBreadcrumbProps {
  breadcrumbItems: Array<{
    text: string;
    link?: string;
  }>
}

const HomeBreadcrumb: FC<HomeBreadcrumbProps> = ({breadcrumbItems}) => {
  return (
    <Breadcrumb>
      <LinkContainer to="/">
        <Breadcrumb.Item linkProps={{className: 'bi-house text-decoration-none'}}>
          &nbsp;Home
        </Breadcrumb.Item>
      </LinkContainer>

      {breadcrumbItems.map(({text, link}) => <>
        {link
          ?
          <LinkContainer to={link}>
            <Breadcrumb.Item linkProps={{className: 'text-decoration-none'}}>
              {text}
            </Breadcrumb.Item>
          </LinkContainer>
          :
          <Breadcrumb.Item linkAs="span">{text}</Breadcrumb.Item>
        }
      </>)}
    </Breadcrumb>
  );
};

export default HomeBreadcrumb;
