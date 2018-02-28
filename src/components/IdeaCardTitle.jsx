import React from 'react';
import PropTypes from 'prop-types';
import { IdeaCardTitlePanel } from './styles';
import { EditableField } from './';

const defaultProps = { text: '' };
const propTypes = {
  isTitleEditing: PropTypes.bool.isRequired,
  handleTitleClick: PropTypes.func.isRequired,
  handleUpdateBlur: PropTypes.func.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export const IdeaCardTitle = ({
  text, isTitleEditing, handleTitleClick, handleUpdateBlur, handleTitleChange,
}) => (
  <IdeaCardTitlePanel>
    <EditableField
      text={text}
      isEditing={isTitleEditing}
      handleEditClick={handleTitleClick}
      handleUpdateBlur={handleUpdateBlur}
      handleChange={handleTitleChange}
      field="title"
    />
  </IdeaCardTitlePanel>
);

IdeaCardTitle.propTypes = propTypes;
IdeaCardTitle.defaultProps = defaultProps;
