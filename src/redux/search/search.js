const ADD_TO_SEARCH = 'themetricshub/ADD_SEARCH';

export const addToSearch = (payload) => (
  { type: ADD_TO_SEARCH, payload }
);

const searchReducer = (state = '', action) => {
  if (action.type === ADD_TO_SEARCH) {
    return action.payload;
  }
  return state;
};

export default searchReducer;
