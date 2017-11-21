import 'react-native';
import React from 'react';
import LoginForm from '../';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <LoginForm />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
