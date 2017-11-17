import 'react-native';
import React from 'react';
import AlbumDetail from '../';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <AlbumDetail />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
