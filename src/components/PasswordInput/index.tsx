import { View, TextInputProps } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { InputContainer, CustomInput, Label, IconButton } from './styles';
import { useState } from 'react';

export default function PasswordInput({ value, ...rest }: TextInputProps) {
    const [secure, setSecure] = useState(true)

    return (
        <View>
            <Label>Senha</Label>
            <InputContainer>
                <CustomInput
                    testID='password-custom-input'
                    value={value}
                    secureTextEntry={secure}
                    {...rest}
                />

                <IconButton
                    testID='show-password-button'
                    onPress={() => setSecure(!secure)}
                >
                    {secure ? (
                        <MaterialCommunityIcons name="eye" size={24} color="black" />
                    ) : (
                        <MaterialCommunityIcons name="eye-off" size={24} color="black" />
                    )}
                </IconButton>
            </InputContainer>
        </View>
    )
}