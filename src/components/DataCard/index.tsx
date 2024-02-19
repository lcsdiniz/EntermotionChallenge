import { Text, View } from 'react-native';
import Dialog from "react-native-dialog";
import { Badge, BadgeContainer, BadgeText, Container, Data, Header, MeasureUnit, Note, Row, Title } from './styles';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import currentFormattedDate from '../../utils/currentFormattedDate';
import { HealthData } from '../../types/healthData';
import { HealthDataParams } from '../../screens/Summary';
import { assistantHelp } from '../../services/assistant';
import theme from '../../theme/theme';

interface DataCardProps {
  params: HealthDataParams
  id: string
  data: string
  note: string
  lastUpdate: string
  setHealthData: React.Dispatch<React.SetStateAction<HealthData[]>>
}

export default function DataCard({ params, id, data, note, lastUpdate, setHealthData }: DataCardProps) {
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

  const noteColor = (noteValue: string) => {
    if (noteValue === 'Anomaly') {
      return theme.colors.red;
    } else if (noteValue === 'Alert') {
      return theme.colors.orange;
    } else if (noteValue === 'Healthy') {
      return theme.colors.green;
    }
    else {
      return theme.colors.gray[500];
    }
  };

  const showDialog = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleUpdate = async () => {
    try {
      const assistantNote = await assistantHelp(value, params.measureUnit)
      await AsyncStorage.setItem(id, JSON.stringify({ id, data: value, lastUpdate: currentFormattedDate(), note: assistantNote }))
      setHealthData(prevHealthData => {
        return prevHealthData.map(item => {
          if (item.id === id) {
            return { ...item, data: value, lastUpdate: currentFormattedDate(), note: assistantNote };
          }
          return item;
        });
      });
    } catch (e) {
      console.log(e)
    }
    setVisible(false);
  };

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
          <Title style={{ color: params.color }}>{params.title}</Title>
        </Row>

        <View>
          <Text>{lastUpdate}</Text>
        </View>
      </Header>

      <Data>
        {data}
        <MeasureUnit>{params.measureUnit}</MeasureUnit>
      </Data>

      {note === 'N/A' ? (
        null
      ) : <>
        <BadgeContainer>
          <Badge color={noteColor(note.split("->")[0])}>
            <BadgeText>{note.split("->")[0]}</BadgeText>
          </Badge>
        </BadgeContainer>

        <Note>
          {note.split("-> ")[1]}
        </Note>
      </>
      }
    </Container>
  );
}
