import React, {FC} from 'react';
import {Button, Form, Spinner} from 'react-bootstrap';
import {Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import {ChangePasswordBody} from '../../../redux/auth/types';
import {useChangeUserPasswordMutation} from '../../../redux/auth/user-api';
import ErrorMessage from '../../../components/InfoMessages/ErrorMessage';
import SuccessMessage from '../../../components/InfoMessages/SuccessMessage';

const ChangePasswordsForm: FC = () => {
  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().min(5, 'Too short!').required('Please enter your old password.'),
    password: Yup.string().min(5, 'Too short!').required('Please enter new password.'),
    passwordConfirm: Yup.string().oneOf([Yup.ref('password')], 'Incorrect password repetition.').required('Confirm your new password.')
  });

  const initialValues = {
    oldPassword: '',
    password: '',
    passwordConfirm: ''
  };

  const [changeUserPassword, {isLoading, error, isSuccess}] = useChangeUserPasswordMutation();

  function submitHandler(values: ChangePasswordBody, {resetForm}: FormikHelpers<ChangePasswordBody>) {
    changeUserPassword(values);
    resetForm();
  }

  return (
    <Formik validationSchema={validationSchema} onSubmit={submitHandler} initialValues={initialValues}>
      {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors
        }) => (
        <Form className="rounded-1 bg-dark p-3" noValidate onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="mb-0">
              Old password:<span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              name="oldPassword"
              value={values.oldPassword}
              onChange={handleChange}
              isInvalid={touched.oldPassword && !!errors.oldPassword}
              type="password"
              placeholder="********"
              required
            />
            <Form.Control.Feedback type="invalid">{errors.oldPassword}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="mb-0">
              New password:<span className="text-danger">*</span>
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
              Repeat new password:<span className="text-danger">*</span>
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
            <Form.Control.Feedback type="invalid">{errors.passwordConfirm}</Form.Control.Feedback>
          </Form.Group>
          {error && 'data' in error && <ErrorMessage message={error.data.message}/>}
          {isSuccess && <SuccessMessage message={'Successfully changed.'}/>}
          <Button type="submit" className="mt-2 w-100 fw-bold" disabled={isLoading}>
            Change password
            {isLoading && <Spinner className="ms-2" animation="border" variant="dark" size="sm"/>}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ChangePasswordsForm;
