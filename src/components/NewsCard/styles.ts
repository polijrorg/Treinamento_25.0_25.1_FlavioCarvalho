import styled from 'styled-components';

// Div principal do card
export const NewsCardDiv = styled.div`
    display: flex;
    //width: 304px;
    height: 120px;
    align-items: center;
    gap: 8px;
`;

// Imagem da noticia
export const NewsCardImg = styled.img`
    width: 112px;
    height: 112px;
    flex-shrink: 0;
`;

// Div que contem o texto e título
export const NewsCardTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    flex: 1 0 0;
    align-self: stretch;
    cursor: pointer;
`;

// Titulo da noticia
export const NewsCardTittle = styled.p`
    color: #ecedee;
    /* Subtitle/Bold */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

// Texto da noticia
export const NewsCardText = styled.p`
    align-self: stretch;
    color: #ecedee;
    font-feature-settings: 'liga' off, 'clig' off;
    /* Body/Body Normal */
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.5px;
`;
