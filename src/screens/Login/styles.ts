import styled from '@emotion/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.gray};
  justify-content: center;
  padding: ${props => props.theme.padding.lg};
`;

export const Form = styled.View`
  margin-top: ${props => props.theme.margin.xl};
  padding: ${props => props.theme.padding.lg} ${props => props.theme.padding.md};
  background-color: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0px 1px 2.22px rgba(0, 0, 0, 0.22);
`;

export const Title = styled.Text`
  font-size:  ${props => props.theme.fontSizes.xl};
  font-weight: bold;
  text-align: center;
  color: #0a0a31;
  margin-bottom: ${props => props.theme.margin.lg};
`;