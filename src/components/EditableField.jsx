import React from 'react';
import PropTypes from 'prop-types';
import { EditLink } from './styles';
import { TextArea } from '../assets/styles/components';

const defaultProps = { text: '' };
const propTypes = {
  isEditing: PropTypes.bool.isRequired,
  handleEditClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleUpdateBlur: PropTypes.func.isRequired,
  text: PropTypes.string,
  field: PropTypes.string.isRequired,
};

const focusEditableField = (input) => {
  if (input != null) {
    input.focus();
  }
};

export const EditableField = props => (props.isEditing ?
  <TextArea
    innerRef={focusEditableField}
    onBlur={props.handleUpdateBlur}
    defaultValue={props.text}
    field={props.field}
    onChange={props.handleChange}
    maxlength="140"
  />
  : <EditLink role="button" onClick={props.handleEditClick}>{props.text}</EditLink>);

EditableField.propTypes = propTypes;
EditableField.defaultProps = defaultProps;
