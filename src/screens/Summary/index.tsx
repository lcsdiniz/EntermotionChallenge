import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';

import DataCard from '../../components/DataCard';
import { HealthData } from '../../types/healthData';
import RootStackParamList from '../../types/rootStackParamList';
import theme from '../../theme/theme';
import { Container, Title, Subtitle, Scroll } from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Summary'>;

export type HealthDataParams = {
  id: string;
  icon: JSX.Element;
  color: string
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

    const parsedHeartRate = heartRate ? JSON.parse(heartRate) : { id: 'heartRate', data: 'N/A', lastUpdate: 'N/A', note: 'N/A' };
    const parsedBloodPressure = bloodPressure ? JSON.parse(bloodPressure) : { id: 'bloodPressure', data: 'N/A', lastUpdate: 'N/A', note: 'N/A' };
    const parsedCaloriesBurned = caloriesBurned ? JSON.parse(caloriesBurned) : { id: 'caloriesBurned', data: 'N/A', lastUpdate: 'N/A', note: 'N/A' };
    const parsedSleep = sleep ? JSON.parse(sleep) : { id: 'sleep', data: 'N/A', lastUpdate: 'N/A', note: 'N/A' };

    setHealthData([
      parsedHeartRate,
      parsedBloodPressure,
      parsedCaloriesBurned,
      parsedSleep,
    ])
  }

  const healthDataParams: HealthDataParams[] = [
    {
      id: "heartRate",
      icon: <FontAwesome name="heartbeat" size={theme.iconSize} color={theme.colors.pink} />,
      title: "Heart beat",
      measureUnit: "BPM",
      color: theme.colors.pink,
    },
    {
      id: "bloodPressure",
      icon: <Fontisto name="blood-drop" size={theme.iconSize} color={theme.colors.red} />,
      title: "Blood Pressure",
      measureUnit: "mmHg",
      color: theme.colors.red,
    },
    {
      id: "caloriesBurned",
      icon: <FontAwesome5 name="fire" size={theme.iconSize} color={theme.colors.orange} />,
      title: "Calories Burned",
      measureUnit: "Cal",
      color: theme.colors.orange,
    },
    {
      id: "sleep",
      icon: <FontAwesome name="bed" size={theme.iconSize} color={theme.colors.blue} />,
      title: "Sleep",
      measureUnit: "Hours",
      color: theme.colors.blue,
    },
  ];

  function getHealthDataParams(id: string): HealthDataParams | undefined {
    return healthDataParams.find((type) => type.id === id);
  }

  useEffect(() => {
    parseData()
  }, [])

  return (
    <Container>
      <Title>Summary</Title>
      <Subtitle>Check your most recent data or update them by pressing the cards below</Subtitle>

      <Scroll>
        {healthData.map(item => (
          <DataCard
            key={item.id}
            id={item.id}
            params={getHealthDataParams(item.id)!}
            data={item.data}
            note={item.note}
            lastUpdate={item.lastUpdate}
            setHealthData={setHealthData}
          />
        ))}
      </Scroll>
    </Container>
  );
}
