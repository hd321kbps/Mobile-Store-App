import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import phones from './phones';
import phonesPage from './phonesPage';
import phonePage from './phonePage';
import basket from './basket';
import categories from './categories';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    phones,
    phonesPage,
    phonePage,
    basket,
    categories
  });
