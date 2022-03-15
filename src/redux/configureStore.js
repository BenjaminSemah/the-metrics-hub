import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import companyReducer from './company/company';
import snpReducer from './stocks/snp';
import searchStocksReducer from './stocks/search_stocks';
import stocksReducer from './stocks/stocks';
import searchReducer from './search/search';

const reducer = combineReducers(
  {
    company: companyReducer,
    snp: snpReducer,
    searchStocks: searchStocksReducer,
    stocks: stocksReducer,
    search: searchReducer,
  },
);

const store = createStore(reducer, compose(applyMiddleware(thunk, logger)));
export default store;
