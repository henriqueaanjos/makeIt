import React, { FormEvent, useState } from 'react';

import {
    Container,
    Label,
    Colors,
    Button,
    Color
} from './styles';

import { tagColors } from '../../Utils/tagColors';

interface ColorPickerProps{
    setSelectedColor: (color: string) => void
}

const ColorPicker = ({setSelectedColor} :ColorPickerProps) => {
    const [idSelected, setIdSelected] = useState('');

    function handleSubmit(e : FormEvent, id: string ){
        e.preventDefault();
        setIdSelected(id);
        const color = tagColors.find(color => color.id === id);
        if(color) setSelectedColor(color.color);
    }
    return(
        <Container>
            <Label>Color:</Label>
            <Colors>
                {
                    tagColors.map(color => 
                        <Button onClick={e => handleSubmit(e, color.id)}>
                            <Color isSelect={color.id === idSelected} color={color.color}/>
                        </Button>
                    )
                }
            </Colors>
        </Container>
    );
}
export default ColorPicker;