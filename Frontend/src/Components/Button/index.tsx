import React, {ButtonHTMLAttributes} from 'react';
import { useHistory } from 'react-router';
import { 
    Container,
    Text
 } from './styles';

interface TapInfo {
    x: number,
    y: number
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    text: string,
    color: string,
    width: string,
}

const Button = ({text, color, width, ...rest}: ButtonProps) => {
    return(
        <Container {...rest} color={color} width={width}>
            <Text>{text}</Text>
        </Container>
    );
}
export default Button;