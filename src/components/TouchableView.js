import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { isTextChild } from "../utils";

export default ({
  component,
  onPress,
  contianerStyles,
  textStyle,
  children
}) => {
  const Wrapper = component || TouchableOpacity;
  const WrapperEvt = !component ? { onPress } : undefined;
  const isText = isTextChild(children);

  return (
    <Wrapper style={contianerStyles} {...WrapperEvt}>
      {isText ? <Text style={textStyle}>{children}</Text> : children}
    </Wrapper>
  );
};
