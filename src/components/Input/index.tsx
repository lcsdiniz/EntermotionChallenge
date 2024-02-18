import { Text, TextInputProps, View } from 'react-native';
import { CustomInput, Label } from './styles';

interface InputProps extends TextInputProps {
    label: string
}

export default function Input({ label, ...rest }: InputProps) {
    return (
        <View>
            <Label>{label}</Label>
            <CustomInput
                {...rest}
            />
        </View>
    )
}