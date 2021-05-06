import React from 'react';
import { render } from '@testing-library/react';
import { RoadmapTitle } from '../RoadmapTitle';

const img =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png';
const name = 'Javascript';

describe('<Text />', () => {
    it('should render correctly', () => {
        const { getByText } = render(
            <RoadmapTitle languageIcon={img} languageName={name} />
        );
        expect(getByText(name)).toBeTruthy();
    });
});
