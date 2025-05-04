import React from 'react';
import * as S from './styles';

// Props do componente de card de noticia
interface PropsNews {
    imageNews: string;
    title: string;
    description: string;
}

// Componente de card de noticia
export const NewsCard: React.FC<PropsNews> = ({
    imageNews,
    title,
    description
}) => {
    return (
        <S.NewsCardDiv>
            <S.NewsCardImg src={imageNews} />
            <S.NewsCardTextDiv>
                <S.NewsCardTittle>{title}</S.NewsCardTittle>
                <S.NewsCardText>{description}</S.NewsCardText>
            </S.NewsCardTextDiv>
        </S.NewsCardDiv>
    );
};
