import React from 'react';
import { TextInput, View, Text } from 'react-native';
import inputStyles from './Input.style'

const Input = (props) => {
  const { textInputStyle, labelStyle, containerStyle } = inputStyles
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{props.label}</Text>
      <TextInput secureTextEntry={props.password} placeholder={props.placeholder} autoCorrect={false} style={textInputStyle} value={props.value} onChangeText={ () => props.onChangeText() }/>
    </View>
  );
}

export default Input