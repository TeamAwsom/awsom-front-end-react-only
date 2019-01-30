import React from 'react';
import Logo from '../Logo';
import renderer from 'react-test-renderer';

describe('Logo', () => {
  it('renders as expected', () => {
    const tree = renderer.create(<Logo />).toJSON();

    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
