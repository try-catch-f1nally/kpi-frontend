import React, {FC} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {Button, Form, Modal, Spinner} from 'react-bootstrap';
import {useModal} from '../../../hooks';
import {RegisterBody} from '../../../redux/auth/types';
import {useRegisterMutation} from '../../../redux/auth/auth-api';
import ErrorMessage from '../../InfoMessages/ErrorMessage';

const SignUp: FC = () => {
  const {show, handleShow, handleClose} = useModal();
  const [register, {error, isLoading}] = useRegisterMutation();

  function submitHandler(values: RegisterBody) {
    register(values);
  }

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too short!').max(15, 'Too long!').required('Please enter your first name.'),
    lastName: Yup.string().min(2, 'Too short!').max(15, 'Too long!').required('Please enter your last name.'),
    email: Yup.string().email('Invalid email!').required('Please enter your email address.'),
    password: Yup.string().min(5, 'Too short!').required('Please enter password.'),
    passwordConfirm: Yup.string().oneOf([Yup.ref('password')], 'Passwords don\'t match.')
      .required('Confirm your password.'),
    userAgree: Yup.bool().oneOf([true], 'Must be accepted.')
  });

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    userAgree: false
  };

  return (
    <>
      <Button onClick={handleShow} variant="outline-primary" className="ms-2 me-1">
        Sign Up
      </Button>

      <Formik validationSchema={validationSchema} onSubmit={submitHandler} initialValues={initialValues}>
        {({
            handleSubmit,
            handleChange,
            values,
            touched,
            errors
          }) => (
          <Modal show={show} onHide={handleClose} contentClassName="text-light bg-dark">
            <Form noValidate onSubmit={handleSubmit}>
              <Modal.Header closeButton closeVariant="white">
                <Modal.Title>Sign Up</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form.Group className="mb-3">
                  <Form.Label className="mb-0">
                    First Name:<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isInvalid={touched.firstName && !!errors.firstName}
                    type="text"
                    placeholder="Name"
                    required
                  />
                  <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="mb-0">
                    Last Name:<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    isInvalid={touched.lastName && !!errors.lastName}
                    type="text"
                    placeholder="Surname"
                    required
                  />
                  <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="mb-0">
                    Email:<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={touched.email && !!errors.email}
                    type="email"
                    placeholder="namesurname@example.com"
                    required
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="mb-0">
                    Password:<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    isInvalid={touched.password && !!errors.password}
                    type="password"
                    placeholder="********"
                    required
                  />
                  <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="mb-0">
                    Repeat password:<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    name="passwordConfirm"
                    value={values.passwordConfirm}
                    onChange={handleChange}
                    isInvalid={touched.passwordConfirm && !!errors.passwordConfirm}
                    type="password"
                    placeholder="********"
                    required
                  />
                  <Form.Control.Feedback
                    type="invalid">{errors.passwordConfirm}</Form.Control.Feedback>
                </Form.Group>
                <Form.Check
                  name="userAgree"
                  checked={values.userAgree}
                  onChange={handleChange}
                  isInvalid={touched.userAgree && !!errors.userAgree}
                  feedback={errors.userAgree}
                  feedbackType="invalid"
                  id="user-agree-checkbox"
                  type="checkbox"
                  label="I have read and agree to iGadget’s Terms of Service and Privacy Policy."
                  required
                />
              </Modal.Body>
              <Modal.Footer className="justify-content-start">
                {error && 'data' in error && <ErrorMessage message={error.data.message}/>}
                <Button className="fs-5 fw-bold mt-2 w-100" type="submit" disabled={isLoading}>
                  Register
                  {isLoading && <Spinner className="ms-2" animation="border" variant="dark" size="sm"/>}
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        )}
      </Formik>
    </>
  );
};

export default SignUp;
