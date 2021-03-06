const FETCH_DATA = 'themetricshub/FETCH_SNP_DATA';

const apiKey = '5f96da1a62f965a785c4d4d6ec1e9116';
const fetchURL = `https://financialmodelingprep.com/api/v3/quote/%5EGSPC?apikey=${apiKey}`;

export const fetchSnpData = () => async (dispatch) => {
  const response = await fetch(fetchURL);
  const payload = (await response.json())[0];

  dispatch({ type: FETCH_DATA, payload });
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
