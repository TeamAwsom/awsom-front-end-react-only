import React from 'react';
import NotFound from '../NotFound';
import renderer from 'react-test-renderer';

describe('NotFound', () => {
  it('renders as expected', () => {
    const tree = renderer.create(<NotFound />).toJSON();

    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
