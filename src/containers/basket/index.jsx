import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as R from 'ramda';

import { getBasketPhonesWithCount, getTotalBasketPrice } from '../../selectors';
import {
  removePhoneFromBasket,
  basketCheckout,
  cleanBasket
} from '../../actions';

const Basket = ({
  phones,
  totalPrice,
  removePhoneFromBasket,
  basketCheckout,
  cleanBasket
}) => {
  const isBasketEmpty = R.isEmpty(phones);

  const renderContent = () => (
    <div>
      {isBasketEmpty && <div>Your shopping cart is empty</div>}
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-sm cf">
          <tbody>
            {phones.map((phone, index) => (
              <tr className="item-checkout" key={index}>
                <td className="first-column-checkout">
                  <img
                    src={phone.image}
                    alt={phone.name}
                    className="img-thumbnail"
                  />
                </td>
                <td>{phone.name}</td>
                <td>${phone.price}</td>
                <td>{phone.count}</td>
                <td>
                  <span
                    className="delete-cart"
                    onClick={() => removePhoneFromBasket(phone.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {R.not(isBasketEmpty) && (
        <div className="row">
          <div className="text-end total-user-checkout">
            <strong className="me-1">Total:</strong>${totalPrice}
          </div>
        </div>
      )}
    </div>
  );

  const renderSidebar = () => (
    <div>
      <Link className="btn btn-info" to="/">
        <i className="me-1 fa fa-info-circle" />
        <span>Continue shopping</span>
      </Link>
      {R.not(isBasketEmpty) && (
        <div>
          <button className="btn btn-danger" onClick={cleanBasket}>
            <i className="me-1 fa fa-trash-alt" />
            <span>Clear cart</span>
          </button>
          <button
            className="btn btn-success"
            onClick={() => basketCheckout(phones)}
          >
            <i className="me-1 fa fa-envelope" />
            <span>Checkout</span>
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-9">{renderContent()}</div>
          <div className="col-md-3 btn-user-checkout">{renderSidebar()}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  phones: getBasketPhonesWithCount(state),
  totalPrice: getTotalBasketPrice(state)
});

const mapDispatchToProps = {
  removePhoneFromBasket,
  basketCheckout,
  cleanBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
