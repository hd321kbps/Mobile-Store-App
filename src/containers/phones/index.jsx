import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as R from 'ramda';
import Layout from '../layout';
import {
  fetchPhones,
  loadMorePhones,
  addPhoneToBasket,
  fetchCategories
} from '../../actions';
import { getPhones } from '../../selectors';

class Phones extends Component {
  componentDidMount() {
    this.props.fetchPhones();
    this.props.fetchCategories();
  }

  renderPhone(phone, index) {
    const { addPhoneToBasket } = this.props;
    const shortDescription = `${R.take(60, phone.description)}...`;

    return (
      <div className="col-sm-4 col-lg-4 col-md-4 book-list" key={index}>
        <div className="thumbnail card mb-3">
          <img src={phone.image} alt={phone.name} className="img-thumbnail" />
          <div className="caption pt-3 ps-2 pe-2">
            <h4 className="float-end">${phone.price}</h4>
            <h4>
              <Link to={`phones/${phone.id}`}>{phone.name}</Link>
            </h4>
            <p>{shortDescription}</p>
            <p className="itemButton">
              <button
                className="btn btn-primary me-1"
                onClick={() => addPhoneToBasket(phone.id)}
              >
                Buy now!
              </button>
              <Link
                to={`phones/${phone.id}`}
                className="btn btn-outline-secondary"
              >
                More info
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const { phones, loadMorePhones } = this.props;
    return (
      <Layout>
        <div className="books row">
          {phones.map((phone, index) => this.renderPhone(phone, index))}
        </div>
        <div className="row">
          <div className="col-md-12">
            <button
              className="float-end btn btn-primary mb-3"
              onClick={loadMorePhones}
            >
              Load more
            </button>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  phones: getPhones(state, ownProps)
});

const mapDispatchToProps = {
  fetchPhones,
  loadMorePhones,
  addPhoneToBasket,
  fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);
