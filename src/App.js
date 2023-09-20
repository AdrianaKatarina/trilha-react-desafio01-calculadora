
import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const handleAddNumber = (e) => {
    const num = e.target.value;
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus))
      setOperation('')
    }

  }

  const handleMultiplicationNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('*')
    }else {
      const multiplication = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiplication))
      setOperation('')
    }

  }

  const handleDivisionNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('/')
    }else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division))
      setOperation('')
    }

  }

  const handlePercentageNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('%')
    }else {
      const percentage = (Number(firstNumber) / 100 * Number(currentNumber)).toFixed(2);
      setCurrentNumber(String(percentage))
      setOperation('')
    }

  }

  const handleChangeOperatorNumbers = () => {
    const num = currentNumber
    if(currentNumber.includes("-")){
      const removingMinus = currentNumber.replace(/-/g, "")
      setCurrentNumber(removingMinus)
    }else {
      setCurrentNumber(`-${num}`)
    }

  }

  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
            break;
          case '-':
            handleMinusNumbers();
            break;
          case '*':
            handleMultiplicationNumbers();
            break;
          case '/':
            handleDivisionNumbers();
            break;
          case '%':
            handlePercentageNumbers();
          break;
          case '+/-':
            handleChangeOperatorNumbers();
          break;
          default: 
            break;
        }
    }

  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="AC" onClick={handleOnClear}/>
          <Button label="+/-" onClick={handleChangeOperatorNumbers}/>
          <Button label="%" onClick={handlePercentageNumbers}/>
          <Button label="/" onClick={handleDivisionNumbers}/>
        </Row>
        <Row>
          <Button label="7"  onClick={handleAddNumber}/>
          <Button label="8" onClick={handleAddNumber}/>
          <Button label="9" onClick={handleAddNumber}/>
          <Button label="x" onClick={handleMultiplicationNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={handleAddNumber}/>
          <Button label="5" onClick={handleAddNumber}/>
          <Button label="6" onClick={handleAddNumber}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={handleAddNumber}/>
          <Button label="2" onClick={handleAddNumber}/>
          <Button label="3" onClick={handleAddNumber}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="0" onClick={handleAddNumber}/>
          <Button label="." onClick={handleAddNumber}/>   
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
