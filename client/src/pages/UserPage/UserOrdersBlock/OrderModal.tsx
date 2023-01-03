import React, {FC} from 'react';
import {useModal} from '../../../hooks';
import {Button} from 'react-bootstrap';

const OrderModal: FC = () => {
  const {show, handleShow, handleClose} = useModal();

  return (
    <>
      <Button onClick={handleShow} variant="link"
              className="fs-3 ps-1 pb-1 pt-0 pe-0 lh-0 border-0 bi-info-circle"></Button>

      <div className="modal fade" id="order<%= order.number %>">
        <div className="modal-dialog">
          <div className="modal-content bg-dark text-light">
            <div className="modal-header border-secondary">
              <h5 className="modal-title">Order #

              </h5>
              <button type="button" className="btn-close btn-close-white"
                      data-bs-dismiss="modal"></button>
            </div>
            <div className="row g-4 modal-body">
              <div className="col-12 col-sm-6">
                <h5 className="text-white bi-person"> Recipient</h5>
                <div>

                </div>
              </div>
              <div className="col-12 col-sm-6">
                <h5 className="text-white bi-box-seam"> Delivery</h5>
                <div>"

                </div>
                <div>

                </div>
              </div>
              <div className="col-12 col-sm-6">
                <h5 className="text-white bi-cash-coin"> Payment</h5>
                <div>

                </div>
              </div>
              <div className="col-12 col-sm-6">
                <h5 className="text-white bi-cash-coin"> Status</h5>
                <div>

                </div>
                <div>
                  Waybill: <span className="fw-bold"> </span>
                </div>
              </div>
              <div className="col-12">
                <h5 className="text-white bi-bag"> Products</h5>
                <div>

                  <div className="d-flex">
                    <img className="align-self-start me-1" width="140"
                         src="/img/products/"
                         alt=""/>
                    <div className="d-flex flex-column w-100">
                      <div className="mb-1">
                        <a href="#"
                           className="link-light d-block text-decoration-none fs-5">

                        </a>
                        <small className="bg-secondary px-1">ART:</small>
                      </div>
                      <div className="fs-6 d-flex justify-content-between">
                        <span>Price:</span>
                        <span>$ </span>
                      </div>
                      <div className="fs-6 d-flex justify-content-between">
                        <span>Amount:</span>
                        <span></span>
                      </div>
                      <div className="d-flex justify-content-between align-items-baseline">
                        <span>Sum:</span>
                        <span className="fs-5 ">$ </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <button type="button" className="btn btn-lg btn-outline-light bi-download w-100">
                  Download check
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderModal;
