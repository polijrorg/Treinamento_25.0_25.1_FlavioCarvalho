import React from 'react';
import * as S from './styles';

interface PropsNews {
    imageNews: string;
    title: string;
    description: string;
}

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
