import React from 'react';
import { PiuCard, PiuCard2 } from 'components/PiuCard';
import * as S from './styles';

export const piuers = [
    {
        name: 'Flavio',
        user: '@flaviocremaschi',
        image: '/cara_pessoa_1.png',
        text: 'teste numero 1',
        repius: 8,
        comments: 20,
        likes: 25
    },
    {
        name: 'Flavio',
        user: '@flaviocremaschi',
        image: '/cara_pessoa_1.png',
        text: 'teste numero 1',
        repius: 3,
        comments: 1,
        likes: 15
    },
    {
        name: 'Gilbert',
        user: '@gilconha',
        image: '/cara_pessoa_1.png',
        text: 'testando um texto mais longoooooooooooooooooooooooooooooooooooooooo',
        repius: 0,
        comments: 0,
        likes: 1
    }
];

export const CenterComponent: React.FC = () => {
    return (
        <S.DivFeed>
            <S.HearPiuDiv>
                <S.HearPiu placeholder="Ouvir um pio..." />
                <S.HearPiuImg src="/ci_search.png" />
            </S.HearPiuDiv>
            <S.GivePiuDiv>
                <S.GivePiu placeholder="Quero dar um pio..." />
                <S.GivePiuDivIcons>
                    <S.GivePiuLeftIcons>
                        <S.GivePiuIcon src="/Image_02.svg" />
                        <S.GivePiuIcon src="/Video.svg" />
                        <S.GivePiuIcon src="/Emoji.svg" />
                        <S.GivePiuIcon src="/Tag.svg" />
                        <S.GivePiuIcon src="/Frame.svg" />
                    </S.GivePiuLeftIcons>
                    <S.GivePiuIcon src="/Paper_Plane.svg" />
                </S.GivePiuDivIcons>
            </S.GivePiuDiv>
            <S.Division />
            <PiuCard
                name="Flavio"
                user="@flaviocremaschi"
                image="/cara_pessoa_1.png"
                text="teste numero 1"
                repius={8}
                comments={20}
                likes={25}
            />
            {piuers.map((piuer, index) => (
                <PiuCard2
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    name={piuer.name}
                    user={piuer.user}
                    image={piuer.image}
                    text={piuer.text}
                    repius={piuer.repius}
                    comments={piuer.comments}
                    likes={piuer.likes}
                />
            ))}
        </S.DivFeed>
    );
};
