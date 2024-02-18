import React, { useEffect, useState } from 'react';
import { Container, Title, Subtitle } from './styles';
import DataCard from '../../components/DataCard';
import RootStackParamList from '../../types/rootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, TouchableOpacity, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { HealthData } from '../../types/healthData';

type Props = NativeStackScreenProps<RootStackParamList, 'Summary'>;

type HealthDataParams = {
  id: string;
  icon: JSX.Element;
  title: string;
  measureUnit: string;
};

export default function Summmary({ navigation }: Props) {
  const [healthData, setHealthData] = useState<HealthData[]>([]);

  async function parseData() {
    const heartRate = await AsyncStorage.getItem('heartRate');
    const bloodPressure = await AsyncStorage.getItem('bloodPressure');
    const caloriesBurned = await AsyncStorage.getItem('caloriesBurned');
    const sleep = await AsyncStorage.getItem('sleep');

    const parsedHeartRate = heartRate ? JSON.parse(heartRate) : { id: 'heartRate', data: 'N/A', lastUpdate: 'N/A' };
    const parsedBloodPressure = bloodPressure ? JSON.parse(bloodPressure) : { id: 'bloodPressure', data: 'N/A', lastUpdate: 'N/A' };
    const parsedCaloriesBurned = caloriesBurned ? JSON.parse(caloriesBurned) : { id: 'caloriesBurned', data: 'N/A', lastUpdate: 'N/A' };
    const parsedSleep = sleep ? JSON.parse(sleep) : { id: 'sleep', data: 'N/A', lastUpdate: 'N/A' };

    setHealthData([
      parsedHeartRate,
      parsedBloodPressure,
      parsedCaloriesBurned,
      parsedSleep
    ])
  }

  const healthDataParams: HealthDataParams[] = [
    {
      id: "heartRate",
      icon: <FontAwesome name="heartbeat" size={30} color="#900" />,
      title: "Heart beat",
      measureUnit: "BPM",
    },
    {
      id: "bloodPressure",
      icon: <Fontisto name="blood-drop" size={30} color="#900" />,
      title: "Blood Pressure",
      measureUnit: "mmHg",
    },
    {
      id: "caloriesBurned",
      icon: <FontAwesome name="cutlery" size={30} color="#900" />,
      title: "Calories Burned",
      measureUnit: "Cal",
    },
    {
      id: "sleep",
      icon: <FontAwesome name="bed" size={30} color="#900" />,
      title: "Sleep",
      measureUnit: "Hours",
    },
  ];

  function getHealthDataParams(id: string): HealthDataParams | undefined {
    return healthDataParams.find((type) => type.id === id);
  }

  async function handleGenerate() {
    const token = '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';

    const prompt = 'You are a assistant specialized in health. As you check, in you have to look for anomalies in the data and informed an tell what is possibly wrong or which value should be expected, 10 words max. The output must start with "Anomaly detected:"';

    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.20,
      max_tokens: 500,
      top_p: 1,
    }, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    console.log(response.data.choices[0].message.content);
  }

  useEffect(() => {
    parseData()
  }, [])

  return (
    <Container>
      <Title>Summary</Title>
      <Subtitle>Check your most recent data or update them by pressing the cards</Subtitle>

      <TouchableOpacity onPress={() => handleGenerate()}><Text>GPT!!!</Text></TouchableOpacity>

      <View style={{ paddingHorizontal: 16 }}>
        {healthData.map(entity => (
          <DataCard
            key={entity.id}
            id={entity.id}
            params={getHealthDataParams(entity.id)}
            data={entity.data}
            lastUpdate={entity.lastUpdate}
            setHealthData={setHealthData}
          />
        ))}
      </View>
    </Container>
  );
}
