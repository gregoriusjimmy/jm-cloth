import styled from 'styled-components';

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 95%;
    align-items: center;
    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;
