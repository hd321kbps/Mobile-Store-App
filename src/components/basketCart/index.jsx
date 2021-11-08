import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTotalBasketCount, getTotalBasketPrice } from '../../selectors';

const BasketCart = ({ totalBasketCount, totalPrice }) => {
  return (
    <div className="cart">
      <div className="dropdown">
        <div className="d-grid gap-2">
          <Link
            to="/basket"
            id="dLabel"
            className="btn btn-inverse btn-block btn-lg"
          >
            <i className="fas fa-shopping-cart pe-1" />
            <span>
              {totalBasketCount} item(s) - ${totalPrice}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  totalBasketCount: getTotalBasketCount(state),
  totalPrice: getTotalBasketPrice(state)
});

export default connect(mapStateToProps, null)(BasketCart);
