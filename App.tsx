import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { P3colorView } from './modules/p3color';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.rgbColor} />
        <Text style={styles.label}>RGB</Text>
      </View>
      <View style={styles.itemContainer}>
        <P3colorView style={styles.p3Color} />
        <Text style={styles.label}>Display P3</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  itemContainer: {
    flexDirection: 'column',
    margin: 16,
  },
  label: {
    fontSize: 16,
    marginTop: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rgbColor: {
    backgroundColor: 'rgb(255, 0, 0)',
    width: 100,
    height: 100,
  },
  p3Color: {
    width: 100,
    height: 100,
  },
});
