import React from 'react';
import ReactDOM from 'react-dom';
import FreeTrialButton from '../FreeTrialButton';
import renderer from 'react-test-renderer';

describe('Free Trial Button', () => {
  it('renders as expected', () => {
    const tree = renderer.create(<FreeTrialButton />).toJSON();

    console.log(tree);
    expect(tree).toMatchSnapshot();
  });
});
