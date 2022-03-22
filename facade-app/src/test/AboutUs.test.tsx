import React from 'react';
import { render, screen } from '@testing-library/react';

import AboutUs from './../Components/AboutUs'

describe('About Us', () => {
    it('renders correctly', () => {
        const { container } = render(<AboutUs />);

        expect(container).toMatchSnapshot();
    })

    it('should have a header', () => {
        render(<AboutUs/>);

        const header = screen.getAllByRole('rowheader')[0];
        expect(header).toBeInTheDocument();
        expect(header.textContent).toBe('About Us');
    })

    it('should have about us content', () => {
        render(<AboutUs/>);

        const hyperLinks = screen.getAllByRole('link');
        const fileUploadAddon = hyperLinks[0];
        expect(fileUploadAddon).toBeInTheDocument();
        expect(fileUploadAddon).toHaveAttribute('href', 'https://github.com/SasanLabs/owasp-zap-fileupload-addon');
        expect(fileUploadAddon.textContent).toBe('File-upload addon');

        const owaspZap = hyperLinks[1];
        expect(owaspZap).toBeInTheDocument();
        expect(owaspZap).toHaveAttribute('href', 'https://www.zaproxy.org/');
        expect(owaspZap.textContent).toBe('Owasp ZAP');

        const vulnerableApp = hyperLinks[2];
        expect(vulnerableApp).toBeInTheDocument();
        expect(vulnerableApp).toHaveAttribute('href', 'https://github.com/SasanLabs/VulnerableApp')
        expect(vulnerableApp.textContent).toBe('Owasp VulnerableApp');

        expect(screen.getByText(/VulnerableApp-Facade was started when we were building/)).toBeInTheDocument();
    })

    it('should have a contact us section', () => {
        render(<AboutUs/>);

        const header = screen.getAllByRole('rowheader')[1];
        expect(header).toBeInTheDocument();
        expect(header.textContent).toBe('Contact Us');
        expect(screen.getByText('karan.sasan@owasp.org')).toBeInTheDocument();
    })
});

