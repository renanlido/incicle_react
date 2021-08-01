import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${props => props.theme.colors.white};
  border-radius: 10px;

  .container-input {
    display: flex;
    padding: 20px 20px;
  }

  .footer {
    padding: 10px 20px;
    background: ${props => props.theme.colors.gray100};
    border-radius: 10px;

    span {
      color: ${props => props.theme.colors.green100};
      font-weight: 700;
    }
  }
`;

export const WriteAPublication = styled.div``;
