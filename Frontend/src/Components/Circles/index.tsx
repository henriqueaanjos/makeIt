import React from 'react';
import {
    Container,
    Circle1,
    Circle2,
    Circle3,
    Circle4,
} from './styles';

interface CircleProps{
    type: 'up' | 'down'
}
const transition = { duration: 3, ease: [0.43, 0.13, 0.23, 0.96] };
const indexDownLeftVariants = {
    exit: {
        x: -1000,
        y: 1000,
        transition: { ...transition }
      }
}
const indexUpRightVariants = {
    exit: {
        x: 1000,
        y: -1000,
        transition: { ...transition }
      }
}


const Circles = ({ type } : CircleProps ) => {
    return(
        <Container type={type} variants={type==='up' ? indexUpRightVariants : indexDownLeftVariants} exit="exit">
            <Circle1 type={type}>
                <Circle2 type={type}>
                    <Circle3 type={type}>
                        <Circle4 type={type}/>
                    </Circle3>
                </Circle2>
            </Circle1>
        </Container>
    );
}
export default Circles;