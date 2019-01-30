import React from 'react';
import Footer from '../Footer';
import renderer from 'react-test-renderer';

describe('Footer', () => {
  it('renders as expected', () => {
    const tree = renderer.create(<Footer />).toJSON();

    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
