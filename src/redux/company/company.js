const FETCH_COMPANY = 'themetricshub/FETCH_COMPANY';
const CLEAR_COMPANY = 'themetricshub/CLEAR_COMPANY';

export const fetchCompany = (symbol) => async (dispatch) => {
  const apiKey = 'c123416b27ff3e3cbea7848bd271c9a6';
  const fetchURL = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`;

  const payload = (await (await fetch(fetchURL)).json())[0];

  dispatch(
    { type: FETCH_COMPANY, payload },
  );
};

export const clearCompany = () => ({
  type: CLEAR_COMPANY,
});

const companyReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_COMPANY:
      return action.payload;
    case CLEAR_COMPANY:
      return {};
    default:
      return state;
  }
};

export default companyReducer;
