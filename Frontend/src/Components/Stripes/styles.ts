import styled from 'styled-components';


interface StripeProps{
    color: 'one' | 'two' | 'three',
    size: number,
    type: 'left' | 'right',
    allVisible: boolean
}
interface TextProps{
    type: 'left' | 'right'
}

export const Container = styled.div<StripeProps>`
    width: ${({size}) => size}vh;
    height: 75px;
    margin-bottom: ${({type}) => type === 'left' ? 22 : 0}px;
    margin-top: ${({type}) => type === 'right' ? 22 : 0}px;
    border-top-right-radius: ${({type, allVisible}) => type === 'right'?  allVisible ? 10 : 0: 10}px;
    border-bottom-right-radius: ${({type, allVisible}) => type === 'right'? allVisible ? 10 : 0: 10}px;
    border-top-left-radius: ${({type, allVisible}) => type === 'right'? 10 : allVisible ? 10 : 0}px;
    border-bottom-left-radius: ${({type, allVisible}) => type === 'right'? 10 : allVisible ? 10 : 0}px;
    background-color: ${({color, theme, type}) => 
        type === 'right' ?
            color === 'one' ?
                theme.colors.tercenary_light_1
            :
                color === 'two' ?
                    theme.colors.tercenary_light_2
                :
                    theme.colors.tercenary_light_3
        :
            color === 'one' ?
                theme.colors.secundary_light_1
            :
                color === 'two' ?
                    theme.colors.secundary_light_2
                :
                    theme.colors.secundary_light_3
    };
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 10px 10px   ${({ allVisible, type, theme }) => allVisible ? type === 'left' ? theme.colors.shadow_secundary: theme.colors.shadow_tercenary : theme.colors.shadow};
    transition: width, 0.5s;
    &:hover{
        width: ${({size}) => size + 5}vh;
    }
`;

export const Text = styled.h1<TextProps>`
    font-size: 60px;
    color:  ${({ theme, type }) => type === 'right'? theme.colors.text_dark : theme.colors.text};
`;
