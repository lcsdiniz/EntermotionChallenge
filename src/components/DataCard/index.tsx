import { Text, View } from 'react-native';
import Dialog from "react-native-dialog";
import { Container, Data, Header, MeasureUnit, Row, Title } from './styles';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import currentFormattedDate from '../../utils/currentFormattedDate';
import { HealthData } from '../../types/healthData';

interface DataCardProps {
  params: {
    title: string
    icon: any
    measureUnit: string
  }
  id: string
  data: string
  lastUpdate: string
  setHealthData: React.Dispatch<React.SetStateAction<HealthData[]>>
}

export default function DataCard({ params, id, data, lastUpdate, setHealthData }: DataCardProps) {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('')

  const handleDescription = (id: string) => {
    if (id === 'bloodPressure') {
      return <Dialog.Description>Type as systolic/diastolic</Dialog.Description>
    } else if (id === 'sleep') {
      return <Dialog.Description>Type as Hours:Minutes</Dialog.Description>
    }
    return null
  };

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleUpdate = async () => {
    try {
      await AsyncStorage.setItem(id, JSON.stringify({ id, data: value, lastUpdate: currentFormattedDate() }))
      setHealthData(prevHealthData => {
        return prevHealthData.map(item => {
          if (item.id === id) {
            return { ...item, data: value, lastUpdate: currentFormattedDate() };
          }
          return item;
        });
      });
    } catch (e) {
      console.log(e)
    }
    setVisible(false);
  };

  // function formatData(data: DataT): string {
  //   if (typeof data === 'number') {
  //     return data.toString();
  //   } else if (typeof data === 'object') {
  //     if ('systolic' in data && 'diastolic' in data) {
  //       return `${data.systolic}/${data.diastolic}`;
  //     } else if ('hours' in data && 'minutes' in data) {
  //       return `${data.hours}:${data.minutes}`;
  //     }
  //   }
  //   return data;
  // }

  return (
    <Container onPress={showDialog}>
      <View style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}>
        <Dialog.Container visible={visible}>
          <Dialog.Title>Update {params.title}</Dialog.Title>
          {handleDescription(id)}
          <Dialog.Input value={value} onChangeText={setValue} />
          <Dialog.Button label="Cancel" onPress={handleCancel} />
          <Dialog.Button label="Update" onPress={handleUpdate} />
        </Dialog.Container>
      </View>

      <Header>
        <Row>
          {params.icon}
          <Title>{params.title}</Title>
        </Row>

        <View>
          <Text>{lastUpdate}</Text>
        </View>
      </Header>

      <Data>
        {data}
        <MeasureUnit>{params.measureUnit}</MeasureUnit>
      </Data>
    </Container>
  );
}
