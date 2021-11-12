import React from 'react';
import { 
    Container,
    Text
 } from './styles';

interface StripesProps{
    color: 'one' | 'two' | 'three',
    text?: string,
    size: number,
    type: 'left' | 'right',
    allVisible: boolean
}

const Stripes = ({color, text, size, type, allVisible }:StripesProps) => {
    return(
        <Container color={color} size={size} type={type} allVisible={allVisible}>
            <Text type={type}>{text}</Text>
        </Container>
    );
}
export default Stripes;