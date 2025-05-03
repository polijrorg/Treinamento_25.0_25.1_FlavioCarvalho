import styled from 'styled-components';

export const NewsCardDiv = styled.div`
    display: flex;
    width: 304px;
    height: 120px;
    align-items: center;
    gap: 8px;
`;

export const NewsCardImg = styled.img`
    width: 112px;
    height: 112px;
    flex-shrink: 0;
`;

export const NewsCardTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    flex: 1 0 0;
    align-self: stretch;
`;

export const NewsCardTittle = styled.p`
    color: #ecedee;
    /* Subtitle/Bold */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

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
