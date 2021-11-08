import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import * as R from 'ramda';
import classNames from 'classnames';

import { getCategories, getActiveCategoryId } from '../../selectors';

const Categories = ({ categories, activeCategoryId }) => {
  const renderCategory = (category, index) => {
    console.log('activeCategoryId', activeCategoryId);
    const getActiveState = R.propEq('id', activeCategoryId);
    const linkClass = classNames({
      'list-group-item': true,
      'list-group-item-action': true,
      active: getActiveState(category)
    });

    return (
      <Link to={`/categories/${category.id}`} className={linkClass} key={index}>
        {category.name}
      </Link>
    );
  };

  const renderAllCategory = () => {
    const linkClass = classNames({
      'list-group-item': true,
      'list-group-item-action': true,
      active: R.isNil(activeCategoryId)
    });

    return (
      <Link to="/" className={linkClass}>
        All
      </Link>
    );
  };

  return (
    <div className="well card p-3 bg-light">
      <h4>Brand</h4>
      <div className="list-group">
        {renderAllCategory()}
        {categories.map((category, index) => renderCategory(category, index))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  categories: getCategories(state),
  activeCategoryId: getActiveCategoryId(ownProps)
});

export default compose(withRouter, connect(mapStateToProps))(Categories);
