import React, { useState } from 'react';
import {
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Container, Form, Title } from './styles';
import RootStackParamList from '../../types/rootStackParamList';
import Input from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import Button from '../../components/Button';
import Spinner from 'react-native-loading-spinner-overlay';
import theme from '../../theme/theme';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function Login({ navigation }: Props) {
  const [email, setEmail] = useState('john.doe@entermotion.com');
  const [password, setPassword] = useState('password');
  const [loading, setLoading] = useState(false);

  async function login() {
    Keyboard.dismiss();
    setLoading(true);

    try {
      navigation.navigate('Tabs');
    } catch (error) {
      console.log('error', error);
      Alert.alert('Erro', String(error).replace('Error:', ''));
    } finally {
      setLoading(false);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={{ color: theme.colors.white }}
        />
        <Container>
          <Form>
            {/* <Logo /> */}

            <Title>Type your credentials</Title>

            <Input
              label="Email"
              // onChangeText={setEmail}
              value={email}
              placeholder="john.doe@entermotion.com"
              autoCapitalize="none"
            />

            <PasswordInput
              // onChangeText={setPassword}
              value={password}
              placeholder="Password"
            />

            <Button testID="login-button" onPress={login} label="Login" />
          </Form>
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
