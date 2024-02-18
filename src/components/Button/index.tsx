import { ButtonContainer, ButtonText } from './styles';

interface ButtonProps {
  onPress: () => Promise<void>
  label: string
  disabled?: boolean
  testID?: string
}

export default function Button({ label, onPress, disabled, testID }: ButtonProps) {
  return (
    <ButtonContainer testID={testID} onPress={onPress} disabled={disabled}>
      <ButtonText>{label}</ButtonText>
    </ButtonContainer>
  );
}
