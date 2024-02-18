import styled from "@emotion/native";

export const InputContainer = styled.View`
  flex-direction: row;
  border-width: 1px;
  border-radius: ${props => props.theme.borderRadius};
  align-items: center;
  padding-right: ${props => props.theme.padding.sm};
  gap: 8px;
`;

export const CustomInput = styled.TextInput`
  height: 48px;
  flex: 1;
  padding-left: ${props => props.theme.padding.sm};
  font-size: ${props => props.theme.fontSizes.medium};
`;

export const Label = styled.Text`
  font-size: ${props => props.theme.fontSizes.medium};
  position: absolute;
  font-weight: 500;
  background-color: ${props => props.theme.colors.white};
  top: -10px;
  left: 8px;
  padding: 0 ${props => props.theme.padding.xs};
  z-index: 1;
`;

export const IconButton = styled.TouchableOpacity`
  padding: ${props => props.theme.padding.xs};
`
