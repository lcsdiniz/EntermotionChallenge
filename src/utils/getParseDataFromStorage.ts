import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getParsedDataFromStorage() {
  const heartRate = await AsyncStorage.getItem('heartRate');
  const bloodPressure = await AsyncStorage.getItem('bloodPressure');
  const caloriesBurned = await AsyncStorage.getItem('caloriesBurned');
  const sleep = await AsyncStorage.getItem('sleep');

  const parsedHeartRate = heartRate ? JSON.parse(heartRate) : { id: 'heartRate', data: 'N/A', lastUpdate: 'N/A', note: 'N/A' };
  const parsedBloodPressure = bloodPressure ? JSON.parse(bloodPressure) : { id: 'bloodPressure', data: 'N/A', lastUpdate: 'N/A', note: 'N/A' };
  const parsedCaloriesBurned = caloriesBurned ? JSON.parse(caloriesBurned) : { id: 'caloriesBurned', data: 'N/A', lastUpdate: 'N/A', note: 'N/A' };
  const parsedSleep = sleep ? JSON.parse(sleep) : { id: 'sleep', data: 'N/A', lastUpdate: 'N/A', note: 'N/A' };

  return [
    parsedHeartRate,
    parsedBloodPressure,
    parsedCaloriesBurned,
    parsedSleep,
  ]
}