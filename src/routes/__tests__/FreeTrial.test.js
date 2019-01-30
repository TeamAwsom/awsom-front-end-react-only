import React from 'react';
import FreeTrial from '../FreeTrial';
import renderer from 'react-test-renderer';

describe('FreeTrial', () => {
  it('renders as expected', () => {
    const tree = renderer.create(<FreeTrial />).toJSON();

    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
