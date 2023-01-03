import React, {FC} from 'react';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import classes from './IPhone13Pro.module.scss';

const IPhone13Pro: FC = () => {
  return (
    <Container>
      <div className={classes.box}>
        <div className={classes.overlap}>
          <div className={classes.textBlock}>
            <h4 className="fs-1 mb-3">iPhone 13 Pro</h4>
            <h5 className="display-4 fw-bold">Oh. So. Pro.</h5>
            <p className="opacity-75 fs-4">
              iPhone 13 Pro takes a huge leap forward, bringing incredible speed to everything you do and
              dramatic
              new photo and video capabilities — all in two great sizes.
            </p>
            <Link to="/iphones?model=13Pro" className="btn btn-lg btn-outline-primary align-self-start">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default IPhone13Pro;
