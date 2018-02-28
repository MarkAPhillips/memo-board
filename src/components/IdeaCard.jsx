import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import debounceHandler from '@hocs/debounce-handler';
import { compose, withHandlers, withState } from 'recompose';
import { requestDelete, requestEditing, requestUpdate } from '../reducers/ideasReducer';
import { IdeaCardTitle, IdeaCardBody, IdeaCardFooter } from './';
import { IdeaCardPanel } from './styles';

const defaultProps = { idea: {} };

const propTypes = {
  toggleDelete: PropTypes.func.isRequired,
  handleTitleClick: PropTypes.func.isRequired,
  handleBodyClick: PropTypes.func.isRequired,
  handleUpdateBlur: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  handleBodyChange: PropTypes.func.isRequired,
  canDelete: PropTypes.bool.isRequired,
  idea: PropTypes.shape({
    id: PropTypes.string.isRequired,
    created_date: PropTypes.string,
    isTitleEditing: PropTypes.bool,
    isBodyEditing: PropTypes.bool,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};


const enhance = compose(
  connect(),
  withState('canDelete', 'setDelete', false),
  withState('inputTitleField', 'setTitleField', null),
  withState('inputBodyField', 'setBodyField', null),
  withHandlers(
    {
      toggleDelete: props => (val) => {
        props.setDelete(val);
      },
      handleDeleteClick: props => () => {
        const { id } = props.idea;
        props.dispatch(requestDelete({ id }));
      },
      handleTitleClick: props => () => {
        const { id } = props.idea;
        props.dispatch(requestEditing({ id, isTitleEditing: true, isBodyEditing: false }));
      },
      handleBodyClick: props => () => {
        const { id } = props.idea;
        props.dispatch(requestEditing({ id, isTitleEditing: false, isBodyEditing: true }));
      },
      handleTitleChange: props => (evt) => {
        const entry = evt.target.value;
        props.setTitleField(entry);
      },
      handleBodyChange: props => (evt) => {
        const entry = evt.target.value;
        props.setBodyField(entry);
      },
      handleUpdateBlur: props => () => {
        const { id, title, body } = props.idea;
        props.dispatch(requestUpdate({
          id,
          title: props.inputTitleField == null ? title : props.inputTitleField,
          body: props.inputBodyField == null ? body : props.inputBodyField,
          isTitleEditing: false,
          isBodyEditing: false,
        }));
      },
    },
    debounceHandler('handleBodyChange', 300),
    debounceHandler('handleTitleChange', 300),
  ),
);

export const Component = ({
  idea, handleDeleteClick, toggleDelete, canDelete, handleBodyClick,
  handleTitleClick, handleUpdateBlur, handleTitleChange, handleBodyChange,
}) => {
  const {
    title, body, isTitleEditing, isBodyEditing,
  } = idea;
  return (
    <IdeaCardPanel
      onMouseEnter={() => toggleDelete(true)}
      onMouseLeave={() => toggleDelete(false)}
    >
      <IdeaCardTitle
        text={title}
        handleTitleClick={handleTitleClick}
        handleUpdateBlur={handleUpdateBlur}
        isTitleEditing={isTitleEditing}
        handleTitleChange={handleTitleChange}
      />
      <IdeaCardBody
        text={body}
        handleBodyClick={handleBodyClick}
        handleUpdateBlur={handleUpdateBlur}
        isBodyEditing={isBodyEditing}
        handleBodyChange={handleBodyChange}
      />
      <IdeaCardFooter handleDeleteClick={handleDeleteClick} canDelete={canDelete} />
    </IdeaCardPanel>
  );
};

Component.defaultProps = defaultProps;
Component.propTypes = propTypes;

export const IdeaCard = enhance(Component);
