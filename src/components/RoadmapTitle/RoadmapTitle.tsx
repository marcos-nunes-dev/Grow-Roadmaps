import React, { ReactElement } from 'react';
import { Wrapper } from './styles';

interface RoadmapTitleProps {
    languageIcon: string;
    languageName: string;
}

export function RoadmapTitle({
    languageIcon,
    languageName,
}: RoadmapTitleProps): ReactElement {
    return (
        <Wrapper>
            <img src={languageIcon} alt={languageName} />
            <p>{languageName}</p>
        </Wrapper>
    );
}
