import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import ColorPicker from '../ColorPicker';

import {
    Container,
    Header,
    Title,
    ButtonIcon,
    Icon,
    Fields,
    Field,
    FieldColor,
    Label,
    Info,
    Color,
    Footer,
    FooterButton,
    Shared
} from './styles';

interface List{
    id: string,
    title: string,
    color: string
}

interface PopUpList {
    list: List,
    setIsVisible: (isVisible: boolean) => void
    setList: (list: List) => void
    deleteList: (id: string) => void
}

const PopUpInfoList = ({list, setIsVisible, setList, deleteList}: PopUpList) => {
    const theme = useTheme();
    const [color, setColor] = useState(list.color);
    const [title, setTitle] = useState(list.title);
    const [share, setShare] = useState('');
    const [wasShared, setWasShared] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    function closePopUp(){
        setIsVisible(false);
    }
    function handleEdit(){
        setIsEditing(!isEditing);
    }
    function handleSave(){
        const newList= {
            id: list.id,
            title,
            color,
        };
        setList(newList);
        setIsEditing(!isEditing);
        closePopUp();
    }
    function handleShare(){
        setWasShared(!wasShared);
    }
    function handleDelete(id: string){
        const conf = window.confirm("Do you really want to delete this task? This Action can't be undone");
        if(conf){
            deleteList(id);
            closePopUp();
        }
    }

    return(
        <Container>
            <Header>
                <Title>Task Info</Title>
                <ButtonIcon onClick={closePopUp}>
                    <Icon/>
                </ButtonIcon>
            </Header>
            <Fields>
                <Field>
                    <Label>Title: </Label>
                    <Info value={title} onChange={e => setTitle(e.currentTarget.value)} readOnly={!isEditing} disabled={!isEditing}/>
                </Field>
                
                    {isEditing ?
                        <ColorPicker setSelectedColor={setColor}/>
                    :
                        <FieldColor>
                            <Label>Color: </Label>
                            <Color color={color}></Color>
                        </FieldColor>
                        
                    }
                
            </Fields>
            <Footer>
                <FooterButton text="Publish" width={"25%"}  color={theme.colors.quadernary}/>
                <FooterButton text="Share" width={"25%"} onClick={handleShare} color={theme.colors.primary}/>
                <FooterButton text={isEditing ? "Save" : "Edit"} width={"20%"} onClick={isEditing ? handleSave : handleEdit} color={isEditing ? theme.colors.finished :theme.colors.tercenary}/>
                <FooterButton text="Delete" width={"20%"} onClick={() => handleDelete(list.id)} color={theme.colors.secundary}/>
            </Footer>
            { wasShared && <Shared placeholder="Choice User" value={share} onChange={e => setShare(e.currentTarget.value)} autoFocus/>}
        </Container>
    );
}
export default PopUpInfoList;