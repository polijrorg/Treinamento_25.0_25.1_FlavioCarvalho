import React, { useState } from 'react';
import { CommentCard } from 'components/CommentCard';
import { Piu } from 'interfaces/piu';
import * as S from './styles';

// Dados de exemplo para os comentários
export const comenters = [
    {
        name: 'João da Silva',
        image: '/cara_pessoa_4.jpeg',
        text: 'Que maravilha!!!!!!'
    },
    {
        name: 'Meu amigo carlos',
        image: '/cara_pessoa_3.jpeg',
        text: 'Como isso afeta o Vasco?'
    }
];

// Propriedades do componente PiuCard, incluindo o piuwer e a função de deletar post que serão usados para deletar
interface Props {
    name: string;
    user: string;
    image: string;
    text: string;
    repius: number;
    comments: number;
    likes: number;
    self?: boolean;
    piuwer: Piu; // Para achar o piu na lista de pius
    deletePost: (PiuApagado: Piu) => void;
}

export const PiuCard: React.FC<Props> = ({
    name,
    user,
    image,
    text,
    repius,
    comments,
    likes,
    self = false, // Se o piu for do usuario logado ele ira informar como true, e aparecerá o botao de deletar
    deletePost,
    piuwer
}) => {
    // Imagem do botão de repiar (1)
    const [variavelImagem1, setVariavelImagem1] = useState(
        '/Arrow_Reload_02_2.png'
    );

    // Imagem do botão de comentar (2)
    const [variavelImagem2, setVariavelImagem2] =
        useState('/Chat_Circle_2.png');

    // Imagem do botão de curtir (3)
    const [variavelImagem3, setVariavelImagem3] = useState('/Heart_02_2.png');

    let commentSection = null; // Variável que irá armazenar os comentários do piu

    // Função que troca a imagem do botão de repiar (1) ao clicar
    const trocarImagem1 = () => {
        setVariavelImagem1(
            variavelImagem1 === '/Arrow_Reload_02_2.png'
                ? '/Arrow_Reload_02.png'
                : '/Arrow_Reload_02_2.png'
        );
    };

    // Função que troca a imagem do botão de comentar (2) ao clicar
    const trocarImagem2 = () => {
        setVariavelImagem2(
            variavelImagem2 === '/Chat_Circle_2.png'
                ? '/Chat_Circle.png'
                : '/Chat_Circle_2.png'
        );
    };

    // Função que troca a imagem do botão de curtir (3) ao clicar
    const trocarImagem3 = () => {
        setVariavelImagem3(
            variavelImagem3 === '/Heart_02_2.png'
                ? '/Heart_02.png'
                : '/Heart_02_2.png'
        );
    };

    // Se a imagem do botão de comentar (2) for igual a azul, irá renderizar os comentários
    if (variavelImagem2 === '/Chat_Circle.png') {
        commentSection = comenters.map((comenter, index) => (
            <CommentCard
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                name={comenter.name}
                image={comenter.image}
                text={comenter.text}
            />
        ));
    }

    // Se a imagem do botão de curtir (3) for igual a azul, irá adicionar +1 ao número de likes
    if (variavelImagem3 === '/Heart_02.png') {
        // eslint-disable-next-line no-lone-blocks
        {
            // eslint-disable-next-line no-param-reassign
            likes++;
        }
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
                {self && ( // Se o piu for do usuario logado, irá aparecer o botão de deletar
                    <S.DeleteButton>
                        <S.DeleteImg
                            src="/Trash_Full.png"
                            onClick={() => deletePost(piuwer)}
                        />
                    </S.DeleteButton>
                )}
            </S.CardTop>
            <S.CardCenter>{text}</S.CardCenter>
            <S.CardBottom>
                <S.InteractionDiv>
                    <S.InteractionImg
                        src={variavelImagem1}
                        onClick={() => trocarImagem1()}
                    />
                    <S.InteractionNumber>{repius}</S.InteractionNumber>
                </S.InteractionDiv>
                <S.InteractionDiv>
                    <S.InteractionImg
                        src={variavelImagem2}
                        onClick={() => trocarImagem2()}
                    />
                    <S.InteractionNumber>{comments}</S.InteractionNumber>
                </S.InteractionDiv>
                <S.InteractionDiv>
                    <S.InteractionImg
                        src={variavelImagem3}
                        onClick={() => trocarImagem3()}
                    />
                    <S.InteractionNumber>{likes}</S.InteractionNumber>
                </S.InteractionDiv>
            </S.CardBottom>
            {commentSection}
        </S.CardDiv>
    );
};
