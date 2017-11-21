import { View, Text, TextInput } from 'react-native';
import React from 'react';
import Input from '../';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });
it('renders correctly', () => {
  const tree = renderer.create(
    <Input />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('it should render 1 view component', () => {
  const wrapper = shallow(<Input/>);
  expect(wrapper.find(View)).toHaveLength(1);
});
  
it('it should render 1 text component', () => {
  const wrapper = shallow(<Input/>);
  expect(wrapper.find(Text)).toHaveLength(1);
});

  
it('it should render 1 text input component', () => {
  const wrapper = shallow(<Input/>);
  expect(wrapper.find(Text)).toHaveLength(1);
});

