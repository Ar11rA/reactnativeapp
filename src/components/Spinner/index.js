import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import spinnerStyles from './Spinner.style'
const Spinner = (props) => {
  const { viewStyle } = spinnerStyles
  return (
    <View style={viewStyle}>
      <ActivityIndicator size={props.size}/>
    </View>
  );
}

const defaultProps = {
  size: 'large'
}
Spinner.defaultProps = defaultProps

export default Spinner