import styled from 'styled-components';
import { colours } from '../../assets/styles/variables';

export const IdeaContainerPanel = styled.div`
  padding: 0.5em;
`;

export const IdeaCardPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width:230px;
  margin: 8px;
  height: 340px;
  border-radius: 5px;
  border: 1px solid;
  box-shadow: 5px 10px 18px ${colours.grey};
`;

export const IdeaCardTitlePanel = styled.div`
  padding: 1.1em;
  font-size: 1.25em;
  height: 50px;
  color: ${colours.white};
  background-color: ${colours.blue};
`;

export const IdeaCardBodyPanel = styled.div`
  padding: 1.5em;
  overflow: hidden;
  font-size: 0.95em;
  height: 100%;
  colour: ${colours.grey};
`;

export const IdeaCardFooterPanel = styled.div`
  padding: 1.1em;
  position:relative;
  height: 40px;
  background: ${colours.lightgrey};
  &:after {
    content:'';
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -8px;
    width: 0;
    z-index:1;
    height: 0;
    border-top: solid 8px #fff;
    border-left: solid 8px transparent;
    border-right: solid 8px transparent;
`;

export const ButtonContainer = styled.div`
  padding-bottom: 1em;
`;


export const IdeaListPanel = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  align-content: flex-end;
`;

export const DeleteLink = styled.div`
   display: ${props => (props.canDelete ? 'block' : 'none')};
   color: ${colours.red};
   font-size: 0.85em;
   cursor: pointer;
   &:hover {
    opacity: 0.7;
  }
`;

export const EditLink = styled.div`
   cursor: pointer;
   min-height: 100%;
   &:hover {
    opacity: 0.7;
  }
`;
