import React from 'react';
import * as S from './styles';

/* let contagem = 0;

function soma() {
    contagem += 1;
    // eslint-disable-next-line no-console
    console.log(contagem);
} */

interface Props extends S.StyledProps {
    buttonText: string;
    click?: () => void;
}

export const SimpleButton: React.FC<Props> = ({
    buttonText,
    buttonColor,
    click
}) => {
    return (
        <S.Container>
            <S.StyledButton onClick={click} buttonColor={buttonColor}>
                {buttonText}
            </S.StyledButton>
            {/* <S.OrangeButton>CONHECER MAIS</S.OrangeButton> */}
        </S.Container>
    );
};
