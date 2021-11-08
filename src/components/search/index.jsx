import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchPhone } from '../../actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.searchPhone(this.state.value);
  };
  render() {
    return (
      <div className="well blosd card p-3 mb-3 bg-light">
        <h3 className="lead">Quick shop</h3>
        <div className="input-group">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleChange}
              className="form-control"
            />
          </form>
          <span className="input-group-text">
            <i className="fas fa-search" />
          </span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  searchPhone
};

export default connect(null, mapDispatchToProps)(Search);
