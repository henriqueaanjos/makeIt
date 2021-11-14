import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import { useAuth } from '../../Hooks/useAuth';
import { api } from '../../Services/api';
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
    Shared,
    Published,
    PublishedTitle,
    PublicUrlField, 
    PublicUrl,
    SharedField,
    DropDown,
    Item,
    InfoList
} from './styles';

interface List{
    id: string,
    title: string,
    color: string,
    published: boolean
}

interface PopUpList {
    list: List,
    setIsVisible: (isVisible: boolean) => void
    setList: (list: List) => void
    deleteList: (id: string) => void,
    setPublished: (id: string) => void,
    publicMode?: boolean
}
interface User{
    id: string,
    first_name: string,
    last_name: string,
    email: string
}

const PopUpInfoList = ({list, setIsVisible, setList, deleteList, setPublished, publicMode}: PopUpList) => {
    const {user} = useAuth();
    const theme = useTheme();
    const [color, setColor] = useState(list.color);
    const [title, setTitle] = useState(list.title);
    const [share, setShare] = useState('');
    const [wasShared, setWasShared] = useState(false);
    const [selectedId, setSelectedId] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [isPublished, setIsPublished] = useState(list.published);
    const [users, setUsers] = useState<User[]>([]);
    const [owners, setOwners] = useState<User[]>([]);
    function closePopUp(){
        setIsVisible(false);
    }
    function handleEdit(){
        setIsEditing(!isEditing);
    }
    function handleSave(){
        const newList= {
            id: list.id,
            title: title === '' ? list.title : title,
            color: color === '' ? list.color : color,
            published: false
        };
        setList(newList);
        setIsEditing(!isEditing);
        closePopUp();
    }
    async function handleShare(){
        try{
            const response = await api.get<User[]>('/users');
            let result: User[] = [];
            result = response.data.filter(item => !owners.find(item2 => item2.id === item.id));
            console.log(response.data, owners);
            setUsers(result);
            setWasShared(!wasShared);
        }catch(err){
            console.log(err)
        }
    }
    function handleDelete(id: string){
        const conf = window.confirm("Do you really want to delete this list and all your tasks? This Action can't be undone");
        if(conf){
            deleteList(id);
            closePopUp();
        }
    }
    function handlePublish(){
        setIsPublished(!isPublished);
        setPublished(list.id);
    }
    async function handleSaveShare(){
        try{
            await api.post('/share',{
                id: list.id, 
                user_id: selectedId
            });
            closePopUp();
        }catch(err){
            console.log(err);
        }
    }
    async function getData(){
        const response = await api.get<User[]>(`/users/${list.id}`)
        setOwners(response.data);
    }
    useEffect(() => {
        getData();
    }, []);

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
                {!isEditing &&
                    <Field>
                        <Label>Owners: </Label>
                            <InfoList>
                            {owners.map(user => 
                                <Info value={`${user.first_name} ${user.last_name}`} readOnly={true} disabled={true}/>
                            )}
                            </InfoList>
                    </Field>
                }
            </Fields>
            {!publicMode &&
                <Footer>
                    <FooterButton text={isPublished ? "Published!" : "Publish"} width={"27%"} onClick={handlePublish} color={isPublished? theme.colors.finished : theme.colors.quadernary}/>
                    <FooterButton text="Share" width={"25%"} onClick={handleShare} color={theme.colors.primary}/>
                    <FooterButton text={isEditing ? "Save" : "Edit"} width={"20%"} onClick={isEditing ? handleSave : handleEdit} color={isEditing ? theme.colors.finished :theme.colors.tercenary}/>
                    <FooterButton text="Delete" width={"20%"} onClick={() => handleDelete(list.id)} color={theme.colors.secundary}/>
                </Footer>
            }
            { wasShared && 
                <SharedField>
                    <Shared placeholder="Choice User" value={share} onChange={e => {setShare(e.currentTarget.value)}} autoFocus/>
                    <DropDown>
                        {users.filter((item, index) => index < 7 && item).map(us =>
                            <Item onClick={() => {setSelectedId(us.id); setShare(`${us.first_name} ${us.last_name}`)}}>{`${us.first_name} ${us.last_name}  (${us.email})`}</Item>
                        )}
                    </DropDown>
                    <FooterButton text="Save" width={"15%"} onClick={handleSaveShare} color={theme.colors.finished}/>
                </SharedField>
            }
            { isPublished && 
                <Published>
                    <PublishedTitle>Link for List</PublishedTitle>
                    <PublicUrlField>
                        <PublicUrl>{`http://localhost:3000/publish/${list.id}`}</PublicUrl>
                    </PublicUrlField>
                </Published>
            }
        </Container>
    );
}
export default PopUpInfoList;