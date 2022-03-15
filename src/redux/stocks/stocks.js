const FETCHDATA = 'themetricshub/FETCHDATA';

const API_key = 'c123416b27ff3e3cbea7848bd271c9a6';
const fetchURL = `https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=1000000000&betaMoreThan=1&volumeMoreThan=10000&sector=Technology&exchange=NASDAQ&dividendMoreThan=0&limit=100&apikey=${API_key}`;

export const fetchData = () => async (dispatch) => {
  const response = await fetch(fetchURL);
  const payload = await response.json();

  dispatch(
    { type: FETCHDATA, payload}
  )
}