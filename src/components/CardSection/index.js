import React from 'react';
import { View, Text } from 'react-native';
import cardStyles from './CardSection.style';
const CardSection = (props) => {
  const { containerStyle } = cardStyles;
  return (
    <View style={containerStyle}>
      { props.children }
    </View>
  );
};

export default CardSection;