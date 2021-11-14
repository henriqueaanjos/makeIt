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
    small?: boolean
}

const Button = ({text, color, width,small, ...rest}: ButtonProps) => {
    return(
        <Container {...rest} color={color} width={width} small={small}>
            <Text small={small}>{text}</Text>
        </Container>
    );
}
export default Button;