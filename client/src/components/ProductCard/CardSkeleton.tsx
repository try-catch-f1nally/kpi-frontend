import React, {FC} from 'react';
import {Card} from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

const CardSkeleton: FC = () => {
  return (
    <Card bg="dark" className="border-0 flex-grow-1 w-100">
      <Skeleton style={{aspectRatio: '1/1'}} containerClassName="lh-0"/>
      <Card.Body>
        <Card.Title className="mb-2">
          <Skeleton count={2}/>
        </Card.Title>
        <Skeleton className="mb-3"/>
        <Skeleton className="w-50 fs-4" inline/>
        <Skeleton className="w-50 fs-4" inline/>
      </Card.Body>
    </Card>
  );
};

export default CardSkeleton;
