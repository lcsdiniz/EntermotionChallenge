import styled from '@emotion/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.gray[200]};
  padding: ${props => props.theme.padding.xl} 0;
`;

export const Header = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  width: 58px;
  height: 58px;
  border-radius: 29px;
`;

export const Username = styled.Text`
  padding-top: ${props => props.theme.padding.md};
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 500;
  color: ${props => props.theme.colors.black};
`;

export const Email = styled.Text`
  padding: ${props => props.theme.padding.xs} 0;
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 500;
  color: ${props => props.theme.colors.black};
`;

export const ButtonContainer = styled.View`
  padding: 0 ${props => props.theme.padding.xl};
`;

export const Button = styled.TouchableOpacity`
  padding: ${props => props.theme.padding.md};
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius};
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${props => props.theme.colors.white};
  font-weight: bold;
`