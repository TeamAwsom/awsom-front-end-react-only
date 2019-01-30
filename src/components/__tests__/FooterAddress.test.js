import React from 'react';
import FooterAddress from '../FooterAddress';
import renderer from 'react-test-renderer';

describe('FooterAddress', () => {
  it('renders as expected', () => {
    const tree = renderer.create(<FooterAddress />).toJSON();

    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
