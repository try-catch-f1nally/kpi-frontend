import React, {FC} from 'react';
import {Col} from 'react-bootstrap';
import OrderModal from './OrderModal';

const UserOrdersBlock: FC = () => {
  const PRODUCTS_IMG_PATH = 'http://localhost:3001/img/products';

  const orders = [
    {
      number: 12345678,
      date: '15.07.2022',
      products: [
        {
          image: 'iphone-13-midnight',
          name: 'Apple iPhone 13 128GB Midnight',
          article: 'IP1349394'
        },
        {
          image: 'watch-7-midnight',
          name: 'Apple Watch Series 7 Midnight',
          article: 'AW13243238'
        },
        {
          image: 'airpods-2',
          name: 'Apple AirPods 2 White',
          article: 'AP2349249'
        }
      ],
      totalSum: 2500,
      status: 'Pending dispatch',
      recipient: {
        fullName: 'Boris Jonhsonuk',
        phone: '+123456789012'
      },
      delivery: {
        service: 'Nova Poshta',
        method: 'Pickup on delivery',
        city: 'Zhytomyr',
        department: 23,
        waybill: '-'
      },
      payment: 'Online by card'
    }
  ];

  const statusBadges = {
    pendingDispatch: <span
      className="badge bg-warning bg-opacity-50 bi-box-seam fs-6 ms-2"> Pending dispatch</span>,
    inTransit: <span className="badge bg-secondary bi-cursor-fill fs-6 ms-2"> In transit</span>,
    completed: <span className="badge bg-success bi-check2-circle fs-6 ms-2"> Completed</span>
  }

  return (
    <Col xs={12} sm={7} lg={9}>
      {orders.map(order =>
        <div className="bg-dark rounded-1 p-3 fs-5 mb-3" key={order.number}>
          <div className="row">
            <div className="col-6">Order #{order.number}</div>
            <div className="col-6 d-flex justify-content-between">
              <div className="text-muted">{order.date}</div>
              <OrderModal/>
            </div>
            <div className="col-12 col-sm-6 col-md-6 pe-0">
              <span className="text-muted fs-6">1 product</span>
              <div className="d-flex flex-wrap products-images">
                {order.products.map(product =>
                  <picture>
                    <source srcSet={`${PRODUCTS_IMG_PATH}/${product.image}.webp`} width="70" type="image/webp"/>
                    <img src={`${PRODUCTS_IMG_PATH}/${product.image}.jpg`} width="70" alt=""/>
                  </picture>
                )}
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 d-flex flex-column justify-content-end">
              <div className="d-flex justify-content-between align-items-baseline">
                <span>Total sum:</span>
                <span className="ms-2">$ {order.totalSum}</span>
              </div>
              <div className="d-flex justify-content-between align-items-baseline">
                <span>Status:</span>
                {order.status === 'Pending dispatch'
                  ? statusBadges.pendingDispatch
                  : order.status === 'In transit'
                    ? statusBadges.inTransit
                    : order.status === 'Completed'
                      ? statusBadges.completed
                      : ''
                }
              </div>
            </div>
          </div>
        </div>
      )}
    </Col>
  );
};

export default UserOrdersBlock;
