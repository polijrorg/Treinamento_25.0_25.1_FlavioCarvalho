import React from 'react';
import { NewsCard } from 'components/NewsCard';
import * as S from './styles';

export const news = [
    {
        imageNews: '/urna.png',
        title: 'Primeira Noticia',
        description:
            'Em uma cidade distante, um piu piu encontrou um tesouro escondido.'
    },
    {
        imageNews: '/urna.png',
        title: 'Primeira Noticia',
        description:
            'Em uma cidade distante, um piu piu encontrou um tesouro escondido.'
    },
    {
        imageNews: '/urna.png',
        title: 'Primeira Noticia',
        description:
            'Em uma cidade distante, um piu piu encontrou um tesouro escondido.'
    },
    {
        imageNews: '/urna.png',
        title: 'Primeira Noticia',
        description:
            'Em uma cidade distante, um piu piu encontrou um tesouro escondido.'
    },
    {
        imageNews: '/urna.png',
        title: 'Primeira Noticia',
        description:
            'Em uma cidade distante, um piu piu encontrou um tesouro escondido.'
    },
    {
        imageNews: '/urna.png',
        title: 'Primeira Noticia',
        description:
            'Em uma cidade distante, um piu piu encontrou um tesouro escondido.'
    },
    {
        imageNews: '/urna.png',
        title: 'Primeira Noticia',
        description:
            'Em uma cidade distante, um piu piu encontrou um tesouro escondido.'
    },
    {
        imageNews: '/urna.png',
        title: 'Primeira Noticia',
        description:
            'Em uma cidade distante, um piu piu encontrou um tesouro escondido.'
    }
];

export const RightComponent: React.FC = () => {
    return (
        <S.RightDiv>
            <S.TrendingDiv>
                <S.TrendingImg src="/fire.png" />
                <S.TrendingText>Pius em alta</S.TrendingText>
            </S.TrendingDiv>
            {news.map((nw, index) => (
                <NewsCard
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    imageNews={nw.imageNews}
                    title={nw.title}
                    description={nw.description}
                />
            ))}
        </S.RightDiv>
    );
};
