import React from 'react';
import Home from '../Home';
import renderer from 'react-test-renderer';

describe('Home', () => {
  it('renders as expected', () => {
    const tree = renderer.create(<Home />).toJSON();

    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
