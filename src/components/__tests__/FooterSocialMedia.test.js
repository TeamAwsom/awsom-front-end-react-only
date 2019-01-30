import React from 'react';
import FooterSocialMedia from '../FooterSocialMedia';
import renderer from 'react-test-renderer';

describe('FooterSocialMedia', () => {
  it('renders as expected', () => {
    const tree = renderer.create(<FooterSocialMedia />).toJSON();

    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
