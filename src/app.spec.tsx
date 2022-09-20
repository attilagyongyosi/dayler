import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { App } from './app';

describe('App Component', () => {
    it('should have the correct heading', async () => {
        const component = render(<App></App>);
        expect(component).toBeDefined();
        const headingElement = await component.findByTestId('dlr-app-heading');
        expect(headingElement).toHaveTextContent('This is the beginning of a beautiful friendship!');
    });
});
