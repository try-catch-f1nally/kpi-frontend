import React, {FC, Fragment} from 'react';
import {Button, Modal} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useModal} from '../../../hooks';

const Cart: FC = () => {
  const {show, handleShow, handleClose} = useModal();

  const productsInCart = [
    {
      image: 'iphone-13-midnight-0',
      name: 'Apple iPhone 13 128GB Midnight',
      price: 875,
      amount: 2,
      article: 23949
    },
    {
      image: 'iphone-12-pro-gold-0',
      name: 'Apple iPhone 12 Pro 128GB Gold',
      price: 1025,
      amount: 1,
      article: 34322
    }
  ];
  const pathToProductsImages = `${process.env.REACT_APP_SERVER_STATIC_URL}${process.env.REACT_APP_PRODUCTS_IMG_PATH}`;
  const totalSum = productsInCart
    .map(product => product.price * product.amount)
    .reduce((sum, res) => sum + res, 0);

  return (
    <>
      <Button onClick={handleShow} variant="link" className="p-1 py-0 mx-1 position-relative">
        <span className="bi-cart fs-4"></span>
        <span className="position-absolute top-50 start-50 translate-y badge rounded-pill bg-light text-dark">
            {productsInCart.length}
        </span>
      </Button>

      <Modal show={show} onHide={handleClose} contentClassName="text-light bg-dark">
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsInCart.length
            ? productsInCart.map((product, index) =>
              <Fragment key={product.article}>
                <div className="d-flex">
                  <picture>
                    <source srcSet={`${pathToProductsImages}/${product.image}.webp`} type="image/webp"/>
                    <img
                      src={`${pathToProductsImages}/${product.image}.jpg`}
                      className="align-self-start me-1"
                      width="140"
                      alt=""
                    />
                  </picture>
                  <div className="d-flex flex-column justify-content-between w-100">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h5>{product.name}</h5>
                        <small className="bg-secondary px-1">ART:{product.article}</small>
                      </div>
                      <button
                        className="btn text-danger text-opacity-75 fs-5 lh-0 p-0 ps-1 pb-1 bi-trash3"
                        type="button">
                      </button>
                    </div>
                    <div
                      className="d-flex justify-content-end align-items-baseline mt-2 mb-sm-2">
                      <button className="btn btn-outline-primary lh-0 p-2 bi-dash-lg"></button>
                      <div className="mx-2 mx-sm-3 fs-4">{product.amount}</div>
                      <button className="btn btn-outline-primary lh-0 p-2 bi-plus-lg"></button>
                      <div className="fs-4 ms-3 ms-sm-4">
                        $ <span>{product.price * product.amount}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {index !== productsInCart.length - 1 && <hr/>}
              </Fragment>)
            : <h4>The shopping cart is empty :(</h4>
          }
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex flex-column w-100">
            <div className="d-flex justify-content-between fs-4">
              <span>Total:</span>
              <span>$ <span>{totalSum}</span></span>
            </div>
            <Link to="/create-order" className="btn btn-primary fs-5 fw-bold mt-2">
              Create order
            </Link>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
