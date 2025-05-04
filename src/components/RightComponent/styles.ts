import styled from 'styled-components';

// Div principal do RightComponent
export const RightDiv = styled.div`
    display: flex;
    width: 22vw;
    height: 100vh;
    padding: 32px 16px;
    overflow: scroll;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    border-left: 1px solid #4c5155;
    background: #1a1d1e;
`;

// Div do cabeçalho contendo o logo e o texto
export const TrendingDiv = styled.div`
    display: flex;
`;

// Logo do cabeçalho
export const TrendingImg = styled.img`
    width: 32px;
    height: 32px;
`;

// Texto do cabeçalho
export const TrendingText = styled.p`
    color: #ecedee;
    /* Headline/Bold */
    font-family: 'Poppins', sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

// Divisoria
export const NewsDivision = styled.div`
    width: 100%;
    height: 0px;
    border: 0.5px solid #4c5155;
`;
