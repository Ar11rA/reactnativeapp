import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Button from '../';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });

it('renders correctly', () => {
  const tree = renderer.create(
    <Button />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('it should render 1 text component', () => {
  const wrapper = shallow(<Button/>);
  expect(wrapper.find(Text)).toHaveLength(1);
});
  
it('it should render 1 touchable opacity component', () => {
  const wrapper = shallow(<Button/>);
  expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
});
