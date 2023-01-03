import React, {FC} from 'react';

const SuccessMessage: FC<{ message: string }> = ({message}) => {
  return <div className="text-success bi-check-circle"> {message}</div>;
};

export default SuccessMessage;
