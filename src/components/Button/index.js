
import { ButtonContainer } from './styles';

const Button = ({label, onClick}) => {
    return (
      <ButtonContainer value={label} onClick={onClick} type="button">
       {label}
      </ButtonContainer>
    );
  }
  
  export default Button;