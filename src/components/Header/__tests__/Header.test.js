import { View, Text } from 'react-native';
import React from 'react';
import Header from '../';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });
it('renders correctly', () => {
  const tree = renderer.create(
    <Header />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('it should render 1 view component', () => {
  const wrapper = shallow(<Header/>);
  expect(wrapper.find(View)).toHaveLength(1);
});
  
it('it should render 1 text components', () => {
  const wrapper = shallow(<Header/>);
  expect(wrapper.find(Text)).toHaveLength(1);
});
