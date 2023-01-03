import React, {FC} from 'react';

const CreateOrderPage: FC = () => {
  const productsInCart = [
    {
      image: '',
      name: 'name',
      article: '392349',
      price: 875,
      amount: 2,
      sum: 1750
    },
    {
      image: '',
      name: 'name',
      article: '392349',
      price: 875,
      amount: 2,
      sum: 1750
    }
  ];
  const totalSum = productsInCart.map(p => p.sum).reduce((sum, res) => sum + res, 0);

  return (
    <main className="container my-3 my-lg-4 flex-grow-1 text-light">
      <div className="row g-2 g-lg-3">
        <aside className="col-12 col-lg-5 col-xl-4">
          <div className="card bg-dark rounded-1">
            <div className="card-body">
              {productsInCart.map((product, index) => <>
                <div className="d-flex">
                  <img className="align-self-start me-1" width="140" src={product.image} alt=""/>
                  <div className="d-flex flex-column w-100">
                    <div className="mb-1">
                      <div className="fs-5">{product.name}</div>
                      <small className="bg-secondary px-1">ART:{product.article}</small>
                    </div>
                    <div className="fs-6 d-flex justify-content-between">
                      <span>Price:</span>
                      <span>$ {product.price}</span>
                    </div>
                    <div className="fs-6 d-flex justify-content-between">
                      <span>Amount:</span>
                      <span>{product.amount}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-baseline">
                      <span>Sum:</span>
                      <span className="fs-5 ">$ {product.sum}</span>
                    </div>
                  </div>
                </div>
                {index !== productsInCart.length - 1 && <hr/>}
              </>)}
            </div>
            <div className="card-footer border-top border-secondary d-flex justify-content-between fs-4">
              <div>Total:</div>
              <div>$ {totalSum}</div>
            </div>
          </div>
        </aside>
        <div className="col-12 col-lg-7 col-xl-8">
          <form method="post" action="/create-order" className="bg-dark rounded-1 p-3 needs-validation"
                noValidate>
            <div className="row gy-1 gx-3 gx-sm-4">
              <div className="col-12">
                <div className="fs-5">1. Recipient of the order</div>
                <hr className="my-2 opacity-50"/>
              </div>
              <div className="col-6 col-xl-4">
                <label htmlFor="firstname-input">First Name:<span
                  className="text-danger">*</span></label>
                <input className="form-control bg-light" type="text" id="firstname-input"
                       placeholder="Tim"
                       value="<%= firstName %>" name="recipientFirstName" required/>
                <div className="invalid-feedback">Please enter first name.</div>
              </div>
              <div className="col-6 col-xl-4">
                <label htmlFor="lastname-input">Last Name:<span className="text-danger">*</span></label>
                <input className="form-control bg-light" type="text" id="lastname-input"
                       placeholder="Cook"
                       value="<%= lastName %>" name="recipientLastName" required/>
                <div className="invalid-feedback">Please enter last name.</div>
              </div>
              <div className="col-6 col-xl-4">
                <label htmlFor="phone-input">Phone:<span className="text-danger">*</span></label>
                <input className="form-control bg-light" type="tel" id="phone-input"
                       placeholder="+777123123123"
                       value="<%= phone %>" name="recipientPhone" required/>
                <div className="invalid-feedback">Please enter phone number.</div>
              </div>
            </div>
            <div className="row gy-2 mt-4">
              <div className="col-12">
                <div className="fs-5">2. Delivery</div>
                <hr className="my-2 opacity-50"/>
              </div>
              <div className="col-6">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="deliveryService"
                         id="nova-poshta"
                         value="Nova Poshta" checked/>
                  <label className="form-check-label" htmlFor="nova-poshta">Nova Poshta</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="deliveryService"
                         id="meest-express"
                         value="Meest Express"/>
                  <label className="form-check-label" htmlFor="meest-express">Meest
                    Express</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="deliveryService"
                         id="ukrposhta"
                         value="UkrPoshta"/>
                  <label className="form-check-label" htmlFor="ukrposhta">UkrPoshta</label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="deliveryMethod" id="pickup"
                         value="Pickup" checked/>
                  <label className="form-check-label" htmlFor="pickup">Pickup from
                    department</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="deliveryMethod" id="courier"
                         value="Courier"/>
                  <label className="form-check-label" htmlFor="courier">Courier delivery</label>
                </div>
              </div>
              <div className="col-12">
                <small>* Delivery cost according to the delivery service tariffs.</small>
              </div>
              <div className="col-12 col-sm-6">
                <select className="form-select mb-2" name="city">
                  <option value="Zhytomyr" selected>Zhytomyr, Zhytomyr region</option>
                  <option value="Kyiv">Kyiv, Kyiv region</option>
                  <option value="Cherkasy">Cherkasy, Cherkasy region</option>
                  <option value="Mykolaiv">Mykolaiv, Mykolaiv region</option>
                </select>
              </div>
              <div className="col-12 col-sm-6" id="col-department-select">
                <select className="form-select" name="department">
                  <option value="1">Department #1</option>
                  <option value="2">Department #2</option>
                  <option value="3">Department #3</option>
                  <option value="4">Department #4</option>
                </select>
              </div>
              <div className="col-12 col-sm-6 d-none" id="col-address-input">
                <input type="text" className="form-control" placeholder="Your address" name="address"/>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <div className="fs-5">3. Payment</div>
                <hr className="my-2 opacity-50"/>
              </div>
              <div className="col-12">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="payment" id="by-card-online"
                         value="By card online" checked/>
                  <label className="form-check-label" htmlFor="by-card-online">By card
                    online</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="payment"
                         id="payment-on-delivery"
                         value="Payment on delivery"/>
                  <label className="form-check-label" htmlFor="payment-on-delivery">Payment on
                    delivery</label>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12 col-sm-6 fs-4 d-flex justify-content-center align-items-center">
                In total: $ {totalSum}
              </div>
              <input value="<%= total %>" name="total" hidden/>
              <div className="col-12 col-sm-6">
                <button type="submit" className="btn btn-primary fs-5 w-100 fw-bold">Confirm order
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default CreateOrderPage;
