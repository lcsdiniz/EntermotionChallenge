import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Avatar, ButtonText, Container, Email, Header, Button, ButtonContainer, Username } from './styles';
import RootStackParamList from '../../types/rootStackParamList';
import { Alert } from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = NativeStackScreenProps<RootStackParamList, 'User'>;

export default function User({ navigation }: Props) {
  const [user, setUser] = useState({ name: '', email: '' });

  const fetchUser = async () => {
    try {
      const userFromStorage = await AsyncStorage.getItem('@user');
      if (userFromStorage !== null) {
        setUser(JSON.parse(userFromStorage));
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  async function backToLogin() {
    try {
      navigation.navigate('Login')
    } catch (error) {
      Alert.alert('Error', String(error).replace('Error:', ''))
    }
  }

  return (
    <Container>
      <Header>
        <Avatar
          source={{
            uri: 'https://live.staticflickr.com/4010/4699332776_a6e60f41ae_z.jpg',
          }}
        />
        <Username>{user.name}</Username>
        <Email>{user.email}</Email>
      </Header>

      <ButtonContainer>
        <Button onPress={backToLogin}>
          <ButtonText>Logout</ButtonText>
        </Button>
      </ButtonContainer>
    </Container>
  )
}