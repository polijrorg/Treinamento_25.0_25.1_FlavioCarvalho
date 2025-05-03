import styled from 'styled-components';

export interface StyledProps {
    selected: boolean;
}

// Botoes da coluna a esquerda
export const ItemButton = styled.button<StyledProps>`
    display: flex;
    width: 304px;
    height: 57px;
    padding: 0px 16px;
    align-items: center;
    gap: 10px;
    background-color: ${({ selected }) =>
        selected ? '#3e63dd' : 'transparent'};
    border-radius: ${({ selected }) =>
        selected ? '0px 80px 80px 0px' : '0px'};
    border: none;
    cursor: pointer;
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
