import React, {FC} from 'react';
import {Button, Form, InputGroup, Modal} from 'react-bootstrap';
import {useModal} from '../../../hooks';

const Search: FC = () => {
  const {show, handleShow, handleClose} = useModal();

  return (
    <>
      <Button
        onClick={handleShow}
        variant="link"
        className="bi-search fs-4 p-1 py-0 mx-1"
      ></Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <InputGroup size="lg">
          <Button
            type="submit"
            variant="light"
            className="bi-search fs-5"
          ></Button>
          <Form.Control className="border-0 flex-grow-1" placeholder="Search..." autoFocus/>
          <Button
            type="button"
            variant="light"
            className="btn bi-x-lg"
            onClick={handleClose}
          ></Button>
        </InputGroup>
      </Modal>
    </>
  );
};

export default Search;
