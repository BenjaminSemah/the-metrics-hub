import { addToSearch } from './search';

it('correctly returns payload and sets type to "ADD_TO_SEARCH"',
  () => {
    const action = addToSearch('word');
    expect(action.type).toBe('themetricshub/ADD_SEARCH');
  });
