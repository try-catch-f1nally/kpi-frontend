import React, {FC, useState} from 'react';
import * as Yup from 'yup';
import {Button, Form} from 'react-bootstrap';
import {Formik, FormikValues} from 'formik';
import {Rating} from 'react-simple-star-rating';

const ReviewForm: FC = () => {

  function submitHandler(values: FormikValues) {
    // productId, authorId, authorName, rating, text
  }

  const validationSchema = Yup.object().shape({
    authorName: Yup.string().required('Specify your name.'),
    comment: Yup.string().required('Write the comment')
  });

  const initialValues = {
    authorName: '',
    comment: ''
  }

  const [rating, setRating] = useState(0);
  const tooltipArray = [
    'Terrible',
    'Bad',
    'Average',
    'Great',
    'Awesome'
  ];

  return (
    <Formik validationSchema={validationSchema} onSubmit={submitHandler} initialValues={initialValues}>
      {({
          handleSubmit,
          handleChange,
          values,
          touched,
          errors
        }) => (
        <Form noValidate onSubmit={handleSubmit} className="bg-dark p-3 p-md-4 rounded-1">
          <h4>Give us a feedback</h4>
          <Form.Group className="mt-3">
            <Form.Control
              type="text"
              name="authorName"
              placeholder="Name"
              value={values.authorName}
              onChange={handleChange}
              isInvalid={touched.authorName && !!errors.authorName}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.authorName}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mt-3">
            <Rating
              size={35}
              ratingValue={rating}
              initialValue={5}
              onClick={setRating}
              tooltipArray={tooltipArray}
              transition
              showTooltip
            />
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Control
              as="textarea"
              rows={7}
              name="comment"
              value={values.comment}
              onChange={handleChange}
              placeholder="Write a review about the purchase of this product"
              isInvalid={touched.comment && !!errors.comment}
              required
            />
            <Form.Control.Feedback type="invalid">{errors.comment}</Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" className="fw-bold w-100 mt-3">Post</Button>
        </Form>
      )}
    </Formik>

  );
};

export default ReviewForm;
