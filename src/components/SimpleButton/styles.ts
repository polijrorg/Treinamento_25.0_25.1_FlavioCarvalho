import styled from 'styled-components';

export interface StyledProps {
    buttonColor: string;
}

/*
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
`;
*/

export const StyledButton = styled.button<StyledProps>`
    display: flex;
    padding: 16px 0px;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    border-radius: 16px;
    background: ${({ buttonColor }) => buttonColor || 'black'};
    color: white;
    border: none;
    width: 608px;
`;

export const OrangeButton = styled(StyledButton)`
    background-color: orange;
`;
