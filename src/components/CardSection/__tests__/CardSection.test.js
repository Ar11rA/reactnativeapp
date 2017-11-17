import 'react-native';
import React from 'react';
import CardSection from '../';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <CardSection />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
