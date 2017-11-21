import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import buttonStyles from './Button.style';
const Button = (props) => {
  const { buttonStyle, buttonTextStyle } = buttonStyles;
  return (
    <TouchableOpacity style={buttonStyle} onPress={() => props.onPress()}>
      <Text style={buttonTextStyle}>{props.text}</Text>
    </TouchableOpacity>  
  );
};

const defaultProps = {
  text: 'Buy Now', 
  onPress: () => { console.log('pressed'); }
};
Button.defaultProps = defaultProps;

export default Button;