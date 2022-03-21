import React from 'react';
import { render, screen } from '@testing-library/react'

import Footer from '../Components/Footer';

describe('Footer', () => {
    it('renders correctly', () => {
        const year = new Date().getFullYear();
        const { container } = render(<Footer copyRightYear={year} />);

        expect(container).toMatchSnapshot();
    })
});
