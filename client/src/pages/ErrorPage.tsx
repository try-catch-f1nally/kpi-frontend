import React, {FC} from 'react';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

interface ErrorPageProps {
  title?: string;
}

const ErrorPage: FC<ErrorPageProps> = ({title = 'Oops, something went wrong...'}) => {
  return (
    <Container className="mt-3 mb-1">
      <p className="fs-2">Oops, an error has occurred...</p>
      <hr/>
      <h1 className="text-center bg-dark p-5 fw-bold display-4">
        {title} <i className="bi-emoji-frown-fill text-primary"/>
      </h1>
      <Link to="/" className="link-primary fs-4">Go back to Home page.</Link>
    </Container>
  );
};

export default ErrorPage;
