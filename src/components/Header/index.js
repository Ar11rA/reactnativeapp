import React from 'react';
import { View, Text } from 'react-native';
import headerStyles from './Header.style'
const Header = (props) => {
  const { textStyle, viewStyle } = headerStyles
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  );
}

const defaultProps = {
  title: 'Albums'
}
Header.defaultProps = defaultProps

export default Header