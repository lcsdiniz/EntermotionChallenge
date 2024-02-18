import styled from "@emotion/native";

export const ButtonContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-top: ${props => props.theme.margin.xl};
  padding-vertical: ${props => props.theme.padding.md};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.primary};
`;

export const ButtonText = styled.Text`
  font-size: ${props => props.theme.fontSizes.large};
  line-height: 21px;
  font-weight: bold;
  letter-spacing: 0.25px;
  color: #fff;
`;