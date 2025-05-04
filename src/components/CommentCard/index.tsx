import React from 'react';
import * as S from './styles';

interface CommentProps {
    name: string;
    image: string;
    text: string;
}
// Componente de comentário de um piu
export const CommentCard: React.FC<CommentProps> = ({ name, image, text }) => {
    return (
        <S.CommentDiv>
            <S.CommentImgDiv>
                <S.CommentImg src={image} />
            </S.CommentImgDiv>
            <S.CommentTextDiv>
                <S.CommentName>{name}</S.CommentName>
                <S.CommentDescription>{text}</S.CommentDescription>
            </S.CommentTextDiv>
        </S.CommentDiv>
    );
};
