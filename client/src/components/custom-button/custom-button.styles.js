import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #e3a03b;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: #e3a03b;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: #feba54;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: #feba54;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;
const isSignInUpStyles = css`
  background-color: #e3a03b;
  color: white;
  border: none;

  &:hover {
    background-color: #d49333;
  }
`;
const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  if (props.isSignInUp) {
    return isSignInUpStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  ${getButtonStyles}

  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 10px;

  text-transform: uppercase;

  font-weight: bold;

  cursor: pointer;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    min-width: unset;
  }
`;
