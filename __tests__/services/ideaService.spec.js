import { getIdeas, updateIdea, getNewIdea, deleteIdea } from '../../src/services/ideasService';
import { setUpMockDate } from '../mocks';
import * as resource from '../../src/services/axios/resource';

const mockGuid = '3a273e2c-204a-4d0e-861f-464cf51451ec';
jest.mock('uuid/v4', () => () => mockGuid);
setUpMockDate({ month: 3 });

describe('IdeaService specs', () => {
  it('should verify getNewIdea is called with the correct arguments', () => {
    resource.post = jest.fn();
    const idea = {
      id: mockGuid,
      title: '',
      body: '',
      created_date: '2018-04-01T00:00:00.000Z',
    };
    getNewIdea();
    expect(resource.post).toHaveBeenCalledWith('/ideas', idea);
  });

  it('should verify getIdeas is called with the correct arguments', () => {
    resource.get = jest.fn();
    getIdeas();
    expect(resource.get).toHaveBeenCalledWith('/ideas');
  });

  it('should verify updateIdea is called with the correct arguments', () => {
    resource.patch = jest.fn();
    const idea = { id: mockGuid, title: 'Idea Title', body: 'Idea body' };
    updateIdea(idea);
    expect(resource.patch).toHaveBeenCalledWith(`/ideas/${mockGuid}`, idea);
  });

  it('should verify deleteIdea is called with the correct arguments', () => {
    resource.deleteItem = jest.fn();
    deleteIdea({ id: mockGuid });
    expect(resource.deleteItem).toHaveBeenCalledWith(`/ideas/${mockGuid}`);
  });
});
