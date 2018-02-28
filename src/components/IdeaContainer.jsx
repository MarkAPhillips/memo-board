import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers } from 'recompose';
import { requestLoad, ideasSelector, requestCreate } from '../reducers/ideasReducer';
import { IdeaContainerPanel, IdeaListPanel, ButtonContainer } from './styles';
import { PrimaryButton } from '../assets/styles/components';
import { IdeaList } from './';

const defaultProps = { ideas: {} };

const propTypes = {
  handleAddIdea: PropTypes.func.isRequired,
  ideas: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    created_date: PropTypes.string,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })),
};

const mapStateToProps = state => ({
  ideas: ideasSelector(state),
});

const enhance = compose(
  connect(mapStateToProps),
  withHandlers({
    handleAddIdea: props => () => {
      props.dispatch(requestCreate());
    },
  }),
  lifecycle({
    componentWillMount() {
      this.props.dispatch(requestLoad());
    },
  }),
);

export const Component = ({ ideas, handleAddIdea }) => (
  <IdeaContainerPanel>
    <ButtonContainer>
      <PrimaryButton onClick={handleAddIdea}>Add idea</PrimaryButton>
    </ButtonContainer>
    <IdeaListPanel>
      <IdeaList ideas={ideas} />
    </IdeaListPanel>
  </IdeaContainerPanel>
);

Component.propTypes = propTypes;
Component.defaultProps = defaultProps;

export const IdeaContainer = enhance(Component);
