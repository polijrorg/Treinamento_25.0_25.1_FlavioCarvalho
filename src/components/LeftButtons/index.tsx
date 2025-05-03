import React, { useState } from 'react';
import { LeftButton } from 'components/LeftButton';
import * as S from './styles';

export const LeftButtons: React.FC = () => {
    const [variavel, setVariavel] = useState('Página Inicial');

    return (
        <S.DivButtons>
            <LeftButton
                logo="/bx_home.png"
                text="Página Inicial"
                selected={variavel === 'Página Inicial'}
                click={() => setVariavel('Página Inicial')}
            />
            <LeftButton
                logo="/ic_outline-notifications.png"
                text="Notificações"
                selected={variavel === 'Notificações'}
                click={() => setVariavel('Notificações')}
            />
            <LeftButton
                logo="/jam_messages-alt.png"
                text="Mensagens"
                selected={variavel === 'Mensagens'}
                click={() => setVariavel('Mensagens')}
            />
            <LeftButton
                logo="/Cloud_Check.png"
                text="Salvos"
                selected={variavel === 'Salvos'}
                click={() => setVariavel('Salvos')}
            />
            <LeftButton
                logo="/pajamas_profile.png"
                text="Perfil"
                selected={variavel === 'Perfil'}
                click={() => setVariavel('Perfil')}
            />
            <LeftButton
                logo="/akar-icons_gear.png"
                text="Configurações"
                selected={variavel === 'Configurações'}
                click={() => setVariavel('Configurações')}
            />
        </S.DivButtons>
    );
};
