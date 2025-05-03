import styled from 'styled-components';

// Divisao dos Botoes
export const DivButtons = styled.div`
    display: flex;
    flex-direction: column;
    height: 56px;
    padding-right: 16px;
    align-items: center;
    gap: 10px;
    background-color: #1a1d1e;
`;

// Botoes da coluna a esquerda
export const ItemButton = styled.button`
    display: flex;
    width: 304px;
    height: 57px;
    padding: 0px 16px;
    align-items: center;
    gap: 10px;
    background-color: transparent;
    border: none;
`;

// Texto dos botoes
export const ItemText = styled.p`
    display: flex;
    //width: 179px;
    height: 57px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #ecedee;
    /* Subtitle/Bold */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

// Logo dos botoes
export const ItemLogo = styled.img`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`;

// Botao especial da Pagina Inicial
export const PaginaInicial = styled(ItemButton)`
    border-radius: 0px 80px 80px 0px;
    background: #3e63dd;
`;
