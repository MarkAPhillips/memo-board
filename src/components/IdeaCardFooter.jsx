import React from 'react';
import PropTypes from 'prop-types';
import { DeleteIcon } from './';
import { IdeaCardFooterPanel, DeleteLink } from './styles';

const propTypes = {
  handleDeleteClick: PropTypes.func.isRequired,
  canDelete: PropTypes.bool.isRequired,
};

export const IdeaCardFooter = ({ handleDeleteClick, canDelete }) => (
  <IdeaCardFooterPanel>
    <DeleteLink
      role="button"
      canDelete={canDelete}
      onClick={handleDeleteClick}
    > <DeleteIcon /><span>Delete</span>
    </DeleteLink>
  </IdeaCardFooterPanel>
);

IdeaCardFooter.propTypes = propTypes;
