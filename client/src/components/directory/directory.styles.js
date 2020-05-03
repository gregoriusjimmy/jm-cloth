import styled from 'styled-components';

export const DirectoryMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const MainMenuContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const OtherMenuContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
`;
