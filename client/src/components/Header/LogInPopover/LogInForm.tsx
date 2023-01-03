import React, {FC, useState} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {Button, Form, InputGroup, Spinner} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {LogInBody} from '../../../redux/auth/types';
import {useLoginMutation} from '../../../redux/auth/auth-api';
import ErrorMessage from '../../InfoMessages/ErrorMessage';
import classes from './LogInPopover.module.scss';

const LogInForm: FC = () => {
  const [login, {isLoading, error}] = useLoginMutation();

  const [showPasswordField, setShowPasswordField] = useState(false);
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email!').required('Please enter your email address.'),
    password: Yup.string().min(5, 'Too short!').required('Please enter your password.')
  });

  const initialValues = {
    email: '',
    password: ''
  }

  function submitHandler(values: LogInBody) {
    login(values);
  }

  return (
    <Formik validationSchema={validationSchema} onSubmit={submitHandler} initialValues={initialValues}>
      {({
          handleSubmit,
          handleChange,
          values,
          touched,
          errors
        }) => (
        <Form
          noValidate
          onSubmit={handleSubmit}
          className={'bg-dark rounded mt-1 p-3 ' + classes.popup}
        >
          <Form.Group className="text-light mb-2">
            <Form.Label className="mb-0">Email:</Form.Label>
            <Form.Control
              name="email"
              value={values.email}
              onChange={handleChange}
              isInvalid={touched.email && !!errors.email}
              type="email"
              placeholder="youremail@example.com"
              required
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="text-light">
            <Form.Label className="mb-0">Password:</Form.Label>
            <InputGroup>
              <Form.Control
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={touched.password && !!errors.password}
                type={showPasswordField ? 'text' : 'password'}
                placeholder="********"
                required
                style={{width: '180px'}}
              />
              <Button
                className={showPasswordField ? 'bi-eye' : 'bi-eye-slash'}
                variant="light"
                onClick={() => setShowPasswordField(prevState => !prevState)}
              />
            </InputGroup>
            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
          </Form.Group>
          <small><Link to="/password-recovery" className="link-warning">Forgot Password?</Link></small>
          {error && 'data' in error && <ErrorMessage message={error.data.message}/>}
          <Button
            type="submit"
            variant="primary"
            size="sm"
            className="mt-2 w-100 fw-bold"
            disabled={isLoading}
          >
            Log In
            {isLoading && <Spinner className="ms-2" animation="border" variant="dark" size="sm"/>}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LogInForm;
