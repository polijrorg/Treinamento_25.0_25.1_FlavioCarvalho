import React from 'react';
import { NewsCard } from 'components/NewsCard';
import * as S from './styles';

// Lista que contém as notícias
export const news = [
    {
        imageNews: '/urna.png',
        title: 'Noticia de Alto Impacto',
        description:
            'Em uma cidade distante, um piu piu encontrou um tesouro escondido.'
    },
    {
        imageNews: '/imagem_noticia_1.jpeg',
        title: 'Alta de Pius',
        description: 'Os pius estão em alta, e você não pode ficar de fora!'
    },
    {
        imageNews: '/imagem_noticia_2.jpeg',
        title: 'História de um Piu',
        description:
            'Um piu piu encontrou um tesouro escondido em uma cidade distante.'
    },
    {
        imageNews: '/imagem_noticia_3.jpg',
        title: 'Aventuras de um Piu',
        description:
            'O piu piu embarcou em uma aventura épica para encontrar o tesouro.'
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

// Componente da barra lateral direita
export const RightComponent: React.FC = () => {
    return (
        <S.RightDiv>
            <S.TrendingDiv>
                <S.TrendingImg src="/fire.svg" />
                <S.TrendingText>Pius em alta</S.TrendingText>
            </S.TrendingDiv>
            <S.NewsDivision />
            {news.map((nw, index) => (
                <>
                    <NewsCard
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        imageNews={nw.imageNews}
                        title={nw.title}
                        description={nw.description}
                    />
                    <S.NewsDivision />
                </>
            ))}
        </S.RightDiv>
    );
};
