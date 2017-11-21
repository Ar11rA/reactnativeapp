import React from 'react';
import { View, Text } from 'react-native';
import cardStyles from './Card.style';

const Card = (props) => {
  const { containerStyle } = cardStyles;
  return (
    <View style={containerStyle}>
      { props.children }
    </View>
  );
};

export default Card;