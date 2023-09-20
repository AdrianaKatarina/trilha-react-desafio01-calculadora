import styled from 'styled-components';

export const ButtonContainer = styled.button`
  padding: 1rem;
  border: 0.06rem solid #CDCDCD;
  background-color: #4F00A9;
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 700;
  flex: 1;
  cursor: pointer;
    
  &:hover {
    opacity: 0.6;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.8rem;
  }
`