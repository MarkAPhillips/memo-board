import getApiParams from '../../../src/services/axios/resourceBuilder';
import { get, post, patch, deleteItem } from '../../../src/services/axios/resource';

const returnValue = {
  api: {
    get: jest.fn(), post: jest.fn(), delete: jest.fn(), patch: jest.fn(),
  },
  queryStringParams: '?key=12345',
};

jest.mock('../../../src/services/axios/resourceBuilder');
getApiParams.mockImplementation(() => returnValue);

describe('Resource specs', () => {
  it('should verify get is called with the correct arguments', () => {
    get('ideas', { key: 12345 });
    expect(returnValue.api.get).toHaveBeenCalledWith('ideas?key=12345');
  });

  it('should verify post is called with the correct arguments', () => {
    const data = { id: 1, title: 'Test', body: 'Body Text' };
    post('ideas', data, { key: 12345 });
    expect(returnValue.api.post).toHaveBeenCalledWith('ideas?key=12345', data);
  });

  it('should verify patch is called with the correct arguments', () => {
    const data = { id: 1, title: 'Test', body: 'Body Text' };
    patch('ideas/1', data, { key: 12345 });
    expect(returnValue.api.patch).toHaveBeenCalledWith('ideas/1?key=12345', data);
  });


  it('should verify delete is called with the correct arguments', () => {
    deleteItem('ideas/1', { key: 12345 });
    expect(returnValue.api.delete).toHaveBeenCalledWith('ideas/1?key=12345');
  });
});
