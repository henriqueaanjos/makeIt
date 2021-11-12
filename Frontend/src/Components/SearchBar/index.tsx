import React, {useState} from 'react';

import {
    Container,
    Input,
    Button,
    Icon
} from './styles';
interface SearchBarProps{
    setSearch: (search: string) => void
}
const SearchBar = ({setSearch}: SearchBarProps) => {

    return(
        <Container>
            <Input placeholder="Select Tasks or lists" onChange={e => setSearch(e.target.value)}/>
            <Button>
                <Icon/>
            </Button>
        </Container>
    );
}
export default SearchBar;