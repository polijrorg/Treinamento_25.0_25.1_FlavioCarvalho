import styled from 'styled-components';

// Div principal de todo o componente do meio
export const DivFeed = styled.div`
    display: flex;
    width: 56vw;
    height: 100vh;
    padding: 32px;
    flex-direction: column;
    align-items: center;
    gap: 46px;
    background: #151718;
    overflow-y: scroll;
`;

// Div do primeiro input
export const HearPiuDiv = styled.div`
    display: flex;
    padding: 8px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    color: #ecedee;
    border-radius: 8px;
    background: #4c5155;
`;

// Primeiro input para ouvir um piu
export const HearPiu = styled.input`
    color: #ecedee;
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    ::placeholder {
        color: #ecedee;
        //background: transparent;
        //text-align: center;
        font-feature-settings: 'liga' off, 'clig' off;
        /* Body/Body Normal */
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 171.429% */
        letter-spacing: 0.5px;
    }
`;

// Imagem da lupa no primeiro input de ouvir
export const HearPiuImg = styled.img`
    width: 24px;
    height: 24px;
`;

// Div do segundo input de dar um pio
export const GivePiuDiv = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    color: #ecedee;
    gap: 55px;
    align-self: stretch;
    border-radius: 16px;
    background: #4c5155;
`;

// Segundo input de dar um pio
export const GivePiu = styled.textarea`
    color: #ecedee;
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    ::placeholder {
        //width: 153px;
        color: #ecedee;
        //text-align: center;
        /* Subtitle/Normal */
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

// Div de todos os icone de dentro do quero dar um pio
export const GivePiuDivIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;

// Div apenas dos icones da esquerda
export const GivePiuLeftIcons = styled.div`
    flex-direction: row;
    gap: 8px;
`;

// Icone do segundo input
export const GivePiuIcon = styled.img`
    width: 24px;
    height: 24px;
`;

// Divisoria
export const Division = styled.div`
    width: 100%;
    height: 0px;
    border: 0.5px solid #4c5155;
`;
