import moment from 'moment';
import uuidv4 from 'uuid/v4';
import { post, get, patch, deleteItem } from './axios/resource';

/** Mock Idea Service which handles routes provided by JSON API server
 *  Would be replaced in production to handle routes defined in example
 *  This was implemented to simplify the handling of API requests
 */

const resource = '/ideas';

/** Get all ideas */
export function getIdeas() {
  return get(resource);
}

/** Get new idea */
export function getNewIdea() {
  const data = {
    id: uuidv4(), created_date: moment().toISOString(), title: '', body: '',
  };
  return post(resource, data);
}

/** Update an idea */
export function updateIdea(data) {
  return patch(`${resource}/${data.id}`, data);
}

/** Delete an idea */
export function deleteIdea(data) {
  return deleteItem(`${resource}/${data.id}`);
}
