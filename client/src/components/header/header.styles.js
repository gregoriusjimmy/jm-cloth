import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  padding: 0 70px;
  background: #feba54;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 15px 0;
  text-align: center;
  .logo {
    width: 50px;

    @media screen and (max-width: 768px) {
      width: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    width: 50px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    width: 80%;
    font-size: 0.7em;
    width: 80%;
  }
`;

// export const OptionLink = styled(Link)`
//     padding: 10px 15px;
//    cursor: pointer;
// `;
export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;
export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
