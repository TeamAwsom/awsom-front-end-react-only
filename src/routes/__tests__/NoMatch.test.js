import React from 'react';
import NoMatch from '../NoMatch';
import renderer from 'react-test-renderer';

describe('NoMatch', () => {
  it('renders as expected', () => {
    const tree = renderer.create(<NoMatch />).toJSON();

    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
