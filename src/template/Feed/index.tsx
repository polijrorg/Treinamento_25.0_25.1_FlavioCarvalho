import React from 'react';
import { LeftComponent } from 'components/LeftComponent';
import { CenterComponent } from 'components/CenterComponent';
import { RightComponent } from 'components/RightComponent';
import * as S from './styles';

const ExampleTemplate = () => {
    return (
        <S.Container>
            <LeftComponent />
            <CenterComponent />
            <RightComponent />
        </S.Container>
    );
};
export default ExampleTemplate;
