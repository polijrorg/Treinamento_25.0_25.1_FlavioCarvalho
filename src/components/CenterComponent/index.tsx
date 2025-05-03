import React, { useState } from 'react';
import { PiuCard } from 'components/PiuCard';
import { Piu } from 'interfaces/piu';
import * as S from './styles';

export const CenterComponent: React.FC = () => {
    const [piuers, setPiuers] = useState([
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
    ]);

    function PostPiu(postText: string) {
        const newPiu = {
            name: 'Flavio',
            user: '@flaviocremaschi',
            image: '/cara_pessoa_1.png',
            text: postText,
            repius: 8,
            comments: 20,
            likes: 25
        };
        setPiuers([newPiu, ...piuers]);
    }

    function DeletePiu(PiuApagado: Piu) {
        setPiuers(piuers.filter((piu) => piu !== PiuApagado));
    }

    const [text, setText] = useState('');

    return (
        <S.DivFeed>
            <S.HearPiuDiv>
                <S.HearPiu placeholder="Ouvir um pio..." />
                <S.HearPiuImg src="/ci_search.png" />
            </S.HearPiuDiv>
            <S.GivePiuDiv>
                <S.GivePiu
                    placeholder="Quero dar um pio..."
                    onChange={(event) => setText(event.target.value)}
                />
                <S.GivePiuCount>({text.length}) Palavras</S.GivePiuCount>
                <S.GivePiuDivIcons>
                    <S.GivePiuLeftIcons>
                        <S.GivePiuIcon src="/Image_02.svg" />
                        <S.GivePiuIcon src="/Video.svg" />
                        <S.GivePiuIcon src="/Emoji.svg" />
                        <S.GivePiuIcon src="/Tag.svg" />
                        <S.GivePiuIcon src="/Frame.svg" />
                    </S.GivePiuLeftIcons>
                    {!(text.length === 0 || text.length > 140) && (
                        <S.GivePiuIcon
                            src="/Paper_Plane.svg"
                            onClick={() => PostPiu(text)}
                        />
                    )}
                </S.GivePiuDivIcons>
            </S.GivePiuDiv>
            <S.Division />
            {piuers.map((piuer, index) => (
                <PiuCard
                    self={piuer.user === '@flaviocremaschi'}
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    name={piuer.name}
                    user={piuer.user}
                    image={piuer.image}
                    text={piuer.text}
                    repius={piuer.repius}
                    comments={piuer.comments}
                    likes={piuer.likes}
                    piuwer={piuer}
                    deletePost={DeletePiu}
                />
            ))}
        </S.DivFeed>
    );
};
