import React, { useState } from 'react';
import { CommentCard } from 'components/CommentCard';
import * as S from './styles';

interface Props {
    name: string;
    user: string;
    image: string;
    text: string;
    repius: number;
    comments: number;
    likes: number;
    cardHeight?: string;
}

export const PiuCard: React.FC<Props> = ({
    name,
    user,
    image,
    text,
    repius,
    comments,
    likes
    // cardHeight = '251px'
}) => {
    const [variavel, setVariavel] = useState('inicial');

    let commentSection = null;

    if (variavel === 'mudei') {
        commentSection = (
            <CommentCard
                name="Flavio"
                image="/cara_pessoa_1.png"
                text="teste numero 1"
            />
        );
    }

    return (
        <S.CardDiv>
            <S.CardTop>
                <S.ImgNameUserDiv>
                    <S.CardImgDiv>
                        <S.CardImg src={image} />
                    </S.CardImgDiv>
                    <S.NameUserDiv>
                        <S.Name>{name}</S.Name>
                        <S.User>{user}</S.User>
                    </S.NameUserDiv>
                </S.ImgNameUserDiv>
                <S.DeleteButton src="/Trash_Full.png" />
            </S.CardTop>
            <S.CardCenter>{text}</S.CardCenter>
            <S.CardBottom>
                <S.InteractionDiv>
                    <S.InteractionImg src="/Arrow_Reload_02.png" />
                    <S.InteractionNumber>{repius}</S.InteractionNumber>
                </S.InteractionDiv>
                <S.InteractionDiv>
                    <S.InteractionImg
                        src="/Chat_Circle.png"
                        onClick={() => setVariavel('mudei')}
                    />
                    <S.InteractionNumber>{comments}</S.InteractionNumber>
                </S.InteractionDiv>
                <S.InteractionDiv>
                    <S.InteractionImg src="/Heart_02.png" />
                    <S.InteractionNumber>{likes}</S.InteractionNumber>
                </S.InteractionDiv>
            </S.CardBottom>
            {commentSection}
        </S.CardDiv>
    );
};

export const PiuCard2: React.FC<Props> = ({
    name,
    user,
    image,
    text,
    repius,
    comments,
    likes
}) => {
    return (
        <S.CardDiv>
            <S.CardTop>
                <S.ImgNameUserDiv>
                    <S.CardImgDiv>
                        <S.CardImg src={image} />
                    </S.CardImgDiv>
                    <S.NameUserDiv>
                        <S.Name>{name}</S.Name>
                        <S.User>{user}</S.User>
                    </S.NameUserDiv>
                </S.ImgNameUserDiv>
            </S.CardTop>
            <S.CardCenter>{text}</S.CardCenter>
            <S.CardBottom>
                <S.InteractionDiv>
                    <S.InteractionImg src="/Arrow_Reload_02_2.png" />
                    <S.InteractionNumber>{repius}</S.InteractionNumber>
                </S.InteractionDiv>
                <S.InteractionDiv>
                    <S.InteractionImg src="/Chat_Circle_2.png" />
                    <S.InteractionNumber>{comments}</S.InteractionNumber>
                </S.InteractionDiv>
                <S.InteractionDiv>
                    <S.InteractionImg src="/Heart_02_2.png" />
                    <S.InteractionNumber>{likes}</S.InteractionNumber>
                </S.InteractionDiv>
            </S.CardBottom>
        </S.CardDiv>
    );
};
