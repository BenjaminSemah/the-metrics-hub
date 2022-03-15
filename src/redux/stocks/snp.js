const FETCH_DATA = 'themetricshub/FETCH_SNP_DATA';

const API_key = 'c123416b27ff3e3cbea7848bd271c9a6';
const fetchURL = `https://financialmodelingprep.com/api/v3/quote/%5EGSPC?apikey=${API_key}`;

export const fetchSnpData = () => async (dispatch) => {
  const response = await fetch(fetchURL);
  const payload = (await response.json())[0];

  dispatch({ type: FETCH_DATA, payload, });
};

const snpReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default snpReducer;
