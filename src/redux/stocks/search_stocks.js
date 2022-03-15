const SEARCH_STOCKS = 'themetricshub/SEARCH_STOCKS';
const INITIATE_SEARCH = 'themetricshub/INITIATE_SEARCH';

export const searchData = (data, search) => ({
  type: SEARCH_STOCKS,
  payload: { data, search },
});

export const initiateSearch = (data) => ({
  type: INITIATE_SEARCH,
  payload: data,
});

const searchStocksReducer = (state = [], action) => {
  switch (action.type) {
    case SEARCH_STOCKS:
      return action.payload.data.filter(({ companyName }) => companyName
        .toLowerCase()
        .includes(action.payload.search.toLowerCase()));
    case INITIATE_SEARCH:
      return action.payload;
    default:
      return state;
  }
};

export default searchStocksReducer;
