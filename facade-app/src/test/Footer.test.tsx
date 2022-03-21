import React from 'react';
import { render, screen } from '@testing-library/react'

import Footer from '../Components/Footer';

describe('Footer', () => {
    it('renders correctly', () => {
        const year = new Date().getFullYear();
        const { container } = render(<Footer copyRightYear={year} />);

        expect(container).toMatchSnapshot();
    })

    it('renders copyright text', () => {
        const year = new Date().getFullYear();
        const text = `© Copyright ${year}, SasanLabs`;
        render(<Footer copyRightYear={year}/>);

        const copyRightText = screen.getByTestId('FOOTER_COPYRIGHT_TEXT');
        expect(copyRightText).toBeInTheDocument();
        expect(copyRightText.textContent).toEqual(text);
    })
});
