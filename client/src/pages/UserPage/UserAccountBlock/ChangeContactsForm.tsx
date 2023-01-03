import React, {FC} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {Button, Form, Spinner} from 'react-bootstrap';
import {useAppSelector} from '../../../hooks';
import {useChangeUserDataMutation} from '../../../redux/auth/user-api';
import {selectUserInfo} from '../../../redux/auth/selectors';
import {UserData} from '../../../redux/auth/types';
import ErrorMessage from '../../../components/InfoMessages/ErrorMessage';
import SuccessMessage from '../../../components/InfoMessages/SuccessMessage';

const ChangeContactsForm: FC = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too short!').max(15, 'Too long!').required('Please enter your first name.'),
    lastName: Yup.string().min(2, 'Too short!').max(15, 'Too long!').required('Please enter your last name.'),
    email: Yup.string().email('Invalid email!').required('Please enter your email address.')
  });

  const {firstName, lastName, email} = useAppSelector(selectUserInfo);
  const [changeUserData, {isLoading, error, isSuccess}] = useChangeUserDataMutation();

  const initialValues = {
    firstName,
    lastName,
    email
  };

  function submitHandler(values: UserData) {
    changeUserData(values);
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
        <Form className="rounded-1 bg-dark p-3" noValidate onSubmit={handleSubmit}>
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
          {error && 'data' in error && <ErrorMessage message={error.data.message}/>}
          {isSuccess && <SuccessMessage message={'Successfully changed.'}/>}
          <Button type="submit" className="mt-2 w-100 fw-bold" disabled={isLoading}>
            Save
            {isLoading && <Spinner className="ms-2" animation="border" variant="dark" size="sm"/>}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ChangeContactsForm;
