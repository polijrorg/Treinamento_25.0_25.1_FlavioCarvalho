import styled from 'styled-components';

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

export const TrendingDiv = styled.div`
    display: flex;
`;

export const TrendingImg = styled.img`
    width: 32px;
    height: 32px;
`;

export const TrendingText = styled.p`
    color: #ecedee;
    /* Headline/Bold */
    font-family: 'Poppins', sans-serif;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const TrendingDivision = styled.div`
    height: 0px;
    align-self: stretch;
    stroke-width: 1px;
    stroke: #4c5155;
`;

// Divisoria
export const NewsDivision = styled.div`
    width: 100%;
    height: 0px;
    border: 0.5px solid #4c5155;
`;
