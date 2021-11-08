import * as R from 'ramda';
import request from 'superagent';
import phones from './mockPhones';
import categories from './mockCategories';

export const fetchPhones = async () => {
  const { body } = await request.get(
    'https://run.mocky.io/v3/d2a7d999-4d2e-4a95-ad0d-6f74f2ab8050'
  );

  return body.phones;
};

export const loadMorePhones = async ({ offset }) => {
  return new Promise((resolve, reject) => {
    resolve(phones);
  });
};

export const fetchPhoneById = async (id) => {
  return new Promise((resolve, rejects) => {
    const phone = R.find(R.propEq('id', id), phones);
    resolve(phone);
  });
};

export const fetchCategories = async () => {
  return new Promise((resolve, reject) => {
    resolve(categories);
  });
};
