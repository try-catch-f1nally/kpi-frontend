import React, {FC} from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Breadcrumb} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

const BreadcrumbSkeleton: FC = () => {
  return (
    <Breadcrumb>
      <LinkContainer to="/">
        <Breadcrumb.Item linkProps={{className: 'bi-house text-decoration-none'}}>
          &nbsp;Home
        </Breadcrumb.Item>
      </LinkContainer>
      <Breadcrumb.Item>
        <Skeleton style={{width: 200}}/>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadcrumbSkeleton;
