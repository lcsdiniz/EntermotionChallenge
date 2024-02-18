import styled from '@emotion/native';

export const Container = styled.TouchableOpacity`
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.padding.sm} ${props => props.theme.padding.md};
  margin-bottom: ${props => props.theme.margin.md};
  box-shadow: 0px 1px 2.22px rgba(0, 0, 0, 0.22);
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.margin.sm};
`;

export const Title = styled.Text`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 500;
  color: ${props => props.theme.colors.black};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Data = styled.Text`
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: 500;
  color: ${props => props.theme.colors.black};
`;

export const MeasureUnit = styled.Text`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: 500;
  color: ${props => props.theme.colors.gray[400]};
`;

