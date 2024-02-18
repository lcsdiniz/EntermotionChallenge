import styled from '@emotion/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.gray[200]};
`;

export const Title = styled.Text`
  padding: ${props => props.theme.padding.xl} ${props => props.theme.padding.lg} 0;
  gap: 8px;
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: 500;
  color: ${props => props.theme.colors.black};
`;

export const Subtitle = styled.Text`
  padding: 0 ${props => props.theme.padding.lg} ${props => props.theme.padding.xl};
  gap: 8px;
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 500;
  color: ${props => props.theme.colors.gray[500]};
`;
