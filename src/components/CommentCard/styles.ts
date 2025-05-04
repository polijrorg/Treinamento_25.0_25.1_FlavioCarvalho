import styled from 'styled-components';

// Div principal do card
export const CommentDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

// Div da imagem do usuario
export const CommentImgDiv = styled.div`
    display: flex;
    padding: 2px;
    align-items: center;
    gap: 10px;
    border-radius: 48px;
    border: 2px solid #004c97;
`;

// Imagem do usuario
export const CommentImg = styled.img`
    width: 40px;
    height: 40px;
    flex: 1 0 0;
    align-self: stretch;
    border-radius: 48px;
`;

// Div que contem o text e usuario
export const CommentTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
`;

// Nome do usuario
export const CommentName = styled.p`
    color: #ecedee;
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    /* Body/Body Bold */
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.5px;
`;

// Usuario do usuario
export const CommentDescription = styled.p`
    color: #ecedee;
    text-align: center;
    /* Subtitle/Normal */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
