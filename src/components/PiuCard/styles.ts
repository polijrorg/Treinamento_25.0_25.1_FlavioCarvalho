import styled from 'styled-components';

// Div principal do card
export const CardDiv = styled.div`
    display: flex;
    width: 720px;
    height: auto;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
    border-radius: 16px;
    background: #202425;
`;

// Div da parte de cima do card
export const CardTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
`;

// Div da esquerda da parte de cima
export const ImgNameUserDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

// Div da imagm
export const CardImgDiv = styled.div`
    display: flex;
    padding: 4px;
    align-items: center;
    gap: 10px;
    border-radius: 48px;
    border: 4px solid #004c97;
`;

// Imagem
export const CardImg = styled.img`
    width: 80px;
    height: 80px;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 48px;
`;

// Div que contem o nome e usuario
export const NameUserDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
`;

// Nome
export const Name = styled.p`
    color: #ecedee;
    text-align: center;
    /* Subtitle/Bold */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

// Usuario
export const User = styled.p`
    color: #ecedee;
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    /* Body/Body Normal */
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.5px;
`;

// Lixeira da direita
export const DeleteButton = styled.img`
    width: 24px;
    height: 24px;
`;

// Parte do meio do card, que contem o texto
export const CardCenter = styled.p`
    color: #ecedee;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

// Parte de baixo do card, com os icones
export const CardBottom = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 24px;
`;

// Div que contem um icone e um numero
export const InteractionDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

// Icone
export const InteractionImg = styled.img`
    width: 24px;
    height: 24px;
`;

// Numero do icone
export const InteractionNumber = styled.p`
    color: #ecedee;
    /* Subtitle/Normal */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

export const Division = styled.div`
    height: 0px;
    align-self: stretch;
    stroke-width: 1px;
    stroke: #4c5155;
`;
