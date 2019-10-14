// Test away
import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
    it('should match <Dashboard /> snapshot', () => {
        const tree = renderer.create(<Dashboard />).toJSON();

        expect(tree).toMatchSnapshot();
    });
}); 