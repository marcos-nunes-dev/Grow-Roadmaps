import React, { ReactElement } from 'react';
import { Wrapper } from './styles';
// import Search from './search.svg'

interface SearchbarProps {}

export function Searchbar({}: SearchbarProps): ReactElement {
    return (
        <Wrapper>
            <input type='text' />
            <img src='' />
        </Wrapper>
    );
}
