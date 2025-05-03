import React from 'react';
import * as S from './styles';

interface Props extends S.StyledProps {
    logo: string;
    text: string;
    click: () => void;
}

export const LeftButton: React.FC<Props> = ({
    logo,
    text,
    selected,
    click
}) => {
    return (
        <S.ItemButton onClick={click} selected={selected}>
            <S.ItemLogo src={logo} />
            <S.ItemText>{text}</S.ItemText>
        </S.ItemButton>
    );
};
