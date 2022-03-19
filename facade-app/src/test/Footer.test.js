import React from 'react';
import { render, screen } from '@testing-library/react'

import Footer from '../Components/Footer';

describe('Footer', () => {
    it('renders correctly', () => {
        const { container } = render(<Footer />);

        expect(container).toMatchSnapshot();
    })
});
