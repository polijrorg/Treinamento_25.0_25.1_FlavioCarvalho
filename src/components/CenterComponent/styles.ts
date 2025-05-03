import styled from 'styled-components';

// Div principal de todo o componente do meio
export const DivFeed = styled.div`
    display: flex;
    width: auto;
    padding: 32px;
    flex-direction: column;
    align-items: center;
    gap: 46px;
    background: #151718;
    overflow: scroll;
`;

// Primeiro input para ouvir um piu
export const HearPiu = styled.textarea`
    display: flex;
    padding: 8px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    color: #ecedee;
    border-radius: 8px;
    background: #4c5155;
    // Frase fantasma do input
    ::placeholder {
        color: #ecedee;
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

// Segundo input de dar um pio
export const GivePiu = styled.textarea`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    color: #ecedee;
    gap: 55px;
    align-self: stretch;
    border-radius: 16px;
    background: #4c5155;
    //Frase fantasma do input
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
    gap: 500px;
`;

// Div apenas dos icones da esquerda
export const GivePiuLeftIcons = styled.div`
    gap: 8px;
`;

// Icone do segundo input
export const GivePiuIcon = styled.img`
    width: 24px;
    height: 24px;
`;

export const Division = styled.div`
    height: 0px;
    align-self: stretch;
    stroke-width: 1px;
    stroke: #4c5155;
`;
