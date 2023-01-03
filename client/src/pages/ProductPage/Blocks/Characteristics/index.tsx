import React, {FC, useState} from 'react';
import {Col, Collapse, Container, Row} from 'react-bootstrap';
import classes from '../../ProductPage.module.scss';
import LinkWithUnderlineOnHover from '../../../../components/LinkWithUnderlineOnHover';

const Characteristics: FC<{ characteristics: Array<[string, string]> }> = ({characteristics}) => {
  const [showCharacteristics, setShowCharacteristics] = useState(false);

  return (
    <Container className="container my-3">
      <section className="bg-dark rounded-1 p-3 p-md-4">
        <h3>Main Characteristics:</h3>
        {characteristics.slice(0, 6).map(([key, value]) =>
          <Row className="mt-2">
            <Col xs={12} lg={5} className="d-flex">
              <span className="text-secondary fw-bold">{key}</span>
              <span className={'d-none d-lg-inline ' + classes.dashes}/>
            </Col>
            <Col xs={12} lg={7}>
              <pre className={classes.characteristicText}>{value}</pre>
            </Col>
          </Row>
        )}

        <Collapse in={showCharacteristics}>
          <div>
            {characteristics.slice(6).map(([key, value]) =>
              <Row className="pt-2" key={key}>
                <Col xs={12} lg={5} className="d-flex">
                  <span className="text-secondary fw-bold">{key}</span>
                  <span className={'d-none d-lg-inline ' + classes.dashes}/>
                </Col>
                <Col xs={12} lg={7}>
                  <pre className={classes.characteristicText}>{value}</pre>
                </Col>
              </Row>
            )}
          </div>
        </Collapse>
        <LinkWithUnderlineOnHover
          to="#"
          className="link-light d-block w-50 mx-auto text-center fw-bold"
          onClick={() => setShowCharacteristics(prevState => !prevState)}
        >
          Show {showCharacteristics ? 'less' : 'more'}
        </LinkWithUnderlineOnHover>
      </section>
    </Container>
  );
};

export default Characteristics;
