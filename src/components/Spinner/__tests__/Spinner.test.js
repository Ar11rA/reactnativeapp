import { View, ActivityIndicator } from 'react-native';
import React from 'react';
import Spinner from '../';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });
it('renders correctly', () => {
  const tree = renderer.create(
    <Spinner />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('it should render 1 view component', () => {
  const wrapper = shallow(<Spinner/>);
  expect(wrapper.find(View)).toHaveLength(1);
});
  
it('it should render 1 activity spinner component', () => {
  const wrapper = shallow(<Spinner/>);
  expect(wrapper.find(ActivityIndicator)).toHaveLength(1);
});


