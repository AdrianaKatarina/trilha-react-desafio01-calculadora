import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 224px;
  height: 60px;
  background-color: #1E1E1E;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  font-size: 1.5rem;
  font-family: 'Roboto';
    
  input {
    width: 224px;
    height: 60px;
    padding: 0.8rem;
    text-overflow: ellipsis;
    background-color: #1E1E1E;
    border: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-size: 1.5rem;
    font-family: 'Roboto';
    color: #FFFFFF;
  }
`