import React, {FC, RefAttributes} from 'react';
import {Link, LinkProps} from 'react-router-dom';
import classes from './LinkWithBorderBottom.module.scss';

const LinkWithBorderBottom: FC<LinkProps & RefAttributes<HTMLAnchorElement>> =
  ({children, className, ...props}) => {
    return (
      <Link className={className + ' ' + classes.link} {...props}>
        {children}
      </Link>
    );
  };

export default LinkWithBorderBottom;
