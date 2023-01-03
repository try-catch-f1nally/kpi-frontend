import React, {FC} from 'react';
import {Col} from 'react-bootstrap';
import ChangeContactsForm from './ChangeContactsForm';
import ChangePasswordsForm from './ChangePasswordsForm';

const UserAccountBlock: FC = () => {

  return (
    <>
      <Col xs={12} sm={7} lg={5}>
        <ChangeContactsForm/>
      </Col>
      <Col xs={12} sm={{span: 7, offset: 5}} lg={{span: 4, offset: 0}}>
        <ChangePasswordsForm/>
      </Col>
    </>
  );
};

export default UserAccountBlock;
