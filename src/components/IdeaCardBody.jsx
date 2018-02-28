import React from 'react';
import PropTypes from 'prop-types';
import { IdeaCardBodyPanel } from './styles';
import { EditableField } from './';

const defaultProps = { text: '' };
const propTypes = {
  isBodyEditing: PropTypes.bool.isRequired,
  handleBodyClick: PropTypes.func.isRequired,
  handleBodyChange: PropTypes.func.isRequired,
  handleUpdateBlur: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export const IdeaCardBody = ({
  text, isBodyEditing, handleBodyClick, handleUpdateBlur, handleBodyChange,
}) => (
  <IdeaCardBodyPanel>
    <EditableField
      text={text}
      isEditing={isBodyEditing}
      handleEditClick={handleBodyClick}
      handleUpdateBlur={handleUpdateBlur}
      handleChange={handleBodyChange}
      field="body"
    />
  </IdeaCardBodyPanel>
);

IdeaCardBody.propTypes = propTypes;
IdeaCardBody.defaultProps = defaultProps;
