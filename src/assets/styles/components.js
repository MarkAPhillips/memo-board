import styled from 'styled-components';
import { colours } from './variables';

export const Main = styled.main`
    padding: 1em;
`;

export const Header = styled.h1`
    font-size: 1.5em;
`;

export const Button = styled.button`
  font-size: 1em;
  padding: 0.25em 0.5em;
  border-radius: 3px;
  cursor: pointer;
`;

export const PrimaryButton = Button.extend`
  background: ${colours.blue};
  color: ${colours.white};
  border: 2px solid ${colours.blue};
  &:hover {
    opacity: 0.8;
  }
`;

export const TextArea = styled.textarea`
  border: none;
  background:   ${props => (props.field === 'title' ? colours.blue : colours.white)};
  color:  ${props => (props.field === 'title' ? colours.white : colours.grey)};
  width:100%;
  height:100%;
  box-sizing: border-box;
  resize: none;
  font-family: inherit;
`;
