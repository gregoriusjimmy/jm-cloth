import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 300px;
    top: 70px;
    right: 30px;
  }
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
  @media screen and (max-width: 768px) {
    font-size: 0.5em;
  }
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  @media screen and (max-width: 768px) {
    height: 200px;
  }
`;
