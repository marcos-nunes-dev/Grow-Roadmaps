import React from 'react';
import { render } from '@testing-library/react';
import { Text } from '../Text';

const text = 'Its a text';
const longText =
    'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Sapien in monti palavris qui num significa nadis i pareci latim. Cevadis im ampola pa arma uma pindureta.t';

describe('<Text />', () => {
    it('should render correctly', () => {
        const { getByText } = render(<Text>{text}</Text>);
        expect(getByText(text)).toBeTruthy();
    });

    it('should render truncate', () => {
        const { getByText } = render(
            <Text
                truncate={{
                    lines: 1,
                    ellipsis: 'my custom ellipsis',
                }}
            >
                {longText}
            </Text>
        );
        expect(getByText('my custom ellipsis')).toBeTruthy();
    });
});
