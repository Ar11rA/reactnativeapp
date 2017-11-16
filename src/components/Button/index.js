import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import buttonStyles from './Button.style'
const Button = (props) => {
  const { buttonStyle, buttonTextStyle } = buttonStyles
  return (
    <TouchableOpacity style={buttonStyle} onPress={() => props.onPress()}>
      <Text style={buttonTextStyle}>{props.text}</Text>
    </TouchableOpacity>  
  );
}

export default Button