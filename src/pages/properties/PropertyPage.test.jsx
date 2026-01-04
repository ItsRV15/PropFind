import React from 'react';
import { render } from '@testing-library/react';
import PropertyPage from './PropertyPage';

test('PropertyPage renders without crashing', () => {
    render(<PropertyPage />);
});