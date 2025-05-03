import React from 'react';
import { LeftButtons } from 'components/LeftButtons';
import * as S from './styles';

export const LeftComponent: React.FC = () => {
    return (
        <S.LeftDiv>
            <S.PiuButtons>
                <S.PiuPiuwerMain>
                    <S.PiuPiuwerLogo src="/chick-svgrepo.png" />
                    <S.PiuPiuwerText>PIUPIUWER</S.PiuPiuwerText>
                </S.PiuPiuwerMain>
                <LeftButtons />
            </S.PiuButtons>
            <S.InferiorLeftLogos>
                <S.ProfilePhoto src="quadrados1.png" />
                <S.LogOutButton src="Log_Out.png" />
            </S.InferiorLeftLogos>
        </S.LeftDiv>
    );
};
