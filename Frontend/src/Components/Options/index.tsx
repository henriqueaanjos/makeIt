import React, { useState } from 'react';

import {
    Container,
    Button,
    Title
} from './styles';

interface Option{
    id: string,
    title: string
}
interface Task{
    id: string,
    title: string,
    list_id: string,
    date: string,
    duration: string,
    finished: boolean
}
interface OptionsProps{
    options: Option[],
    setFilter: (id: boolean) => void
}

const Options = ({options, setFilter}: OptionsProps) => {
    const [idSelected, setIdSelected] = useState('1');
    return(
        <Container>
            {
                options.map(item => (
                    <Button value={item.id} onClick={e => {setFilter(e.currentTarget.value === '2' );setIdSelected(e.currentTarget.value)}}>
                        <Title isSelected={item.id === idSelected}>{item.title}</Title>
                    </Button>   
                ))
            }
        </Container>
    );
}
export default Options;