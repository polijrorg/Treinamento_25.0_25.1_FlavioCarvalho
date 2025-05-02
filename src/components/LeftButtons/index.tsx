import React from 'react';
import * as S from './styles';

export const LeftButtons: React.FC = () => {
    return (
        <S.DivButtons>
            <S.PaginaInicial>
                <S.ItemLogo src="/bx_home.png" />
                <S.ItemText>Página Inicial</S.ItemText>
            </S.PaginaInicial>
            <S.ItemButton>
                <S.ItemLogo src="/ic_outline-notifications.png" />
                <S.ItemText>Notificações</S.ItemText>
            </S.ItemButton>
            <S.ItemButton>
                <S.ItemLogo src="/jam_messages-alt.png" />
                <S.ItemText>Mensagens</S.ItemText>
            </S.ItemButton>
            <S.ItemButton>
                <S.ItemLogo src="/Cloud_Check.png" />
                <S.ItemText>Salvos</S.ItemText>
            </S.ItemButton>
            <S.ItemButton>
                <S.ItemLogo src="/pajamas_profile.png" />
                <S.ItemText>Perfil</S.ItemText>
            </S.ItemButton>
            <S.ItemButton>
                <S.ItemLogo src="/akar-icons_gear.png" />
                <S.ItemText>Configurações</S.ItemText>
            </S.ItemButton>
        </S.DivButtons>
    );
};
