import styled from 'styled-components';

// Div que organiza toda o Component da esquerda
export const LeftDiv = styled.div`
    display: flex;
    width: 22vw;
    height: 100vh;
    padding: 32px 0px;
    flex-direction: column;
    align-items: center;
    //gap: 120px;
    flex-shrink: 0;
    border-right: 1px solid #4c5155;
    background: #1a1d1e;
`;

// Div que junta o PiuPiuwer com os botoes
export const PiuButtons = styled.div`
    display: flex;
    height: 528px;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    flex-shrink: 0;
    align-self: stretch;
`;

// Logo principal do feed (PiuPiuwer)
export const PiuPiuwerMain = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

// Texto do logo principal
export const PiuPiuwerText = styled.p`
    color: #ecedee;
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 6px;
`;

// Imagem do logo principal
export const PiuPiuwerLogo = styled.img`
    width: 48px;
    height: 48px;
`;

export const InferiorLeftLogos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    border-radius: 100px;
`;

// Botao quadrados 1
export const ProfilePhoto = styled.img`
    width: 64px;
    height: 64px;
    flex: 1 0 0;
    align-self: stretch;
    margin-left: 0px;
    border-radius: 100px;
`;

// Botao LogOut
export const LogOutButton = styled.img`
    width: 64px;
    height: 64px;
    flex-shrink: 0;
`;
