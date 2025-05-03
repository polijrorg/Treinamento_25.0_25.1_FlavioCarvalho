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
            <S.HearPiu placeholder="Ouvir um pio...">
                <S.HearPiuImg src="/ci_search.png" />
            </S.HearPiu>
            <S.GivePiu placeholder="Quero dar um pio...">
                <S.GivePiuDivIcons>
                    <S.GivePiuLeftIcons>
                        <S.GivePiuIcon src="/Image_02.png" />
                        <S.GivePiuIcon src="/Video.png" />
                        <S.GivePiuIcon src="/Frame.png" />
                        <S.GivePiuIcon src="/Tag.png" />
                        <S.GivePiuIcon src="/Frame_Gif.png" />
                    </S.GivePiuLeftIcons>
                    <S.GivePiuIcon src="/Paper_Plane.png" />
                </S.GivePiuDivIcons>
            </S.GivePiu>
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
                <PiuCard
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
            <PiuCard2
                name="Flavio"
                user="@flaviocremaschi"
                image="/cara_pessoa_1.png"
                text="teste numero 1"
                repius={3}
                comments={1}
                likes={15}
            />
        </S.DivFeed>
    );
};
