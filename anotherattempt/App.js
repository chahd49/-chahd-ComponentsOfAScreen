import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.container}>
      <Text>Navbar</Text>
      <StatusBar style="auto" />
    </View>

    <View style={styles.top}>
      <Text>Image/Video</Text>
      <StatusBar style="auto" />
    </View>

    <View style={styles.section2}>
      <Text>Section 2</Text>
      <StatusBar style="auto" />
    </View>
    
    <View style={styles.footer}>
      <Text>Footer</Text>
      <StatusBar style="auto" />
    </View>
    </View>
  );
  
  
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'left',
    justifyContent: 'center',
    width: 500
  },
  top: {
    flex: 5,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500
  },
  section2: {
    flex: 5,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500
    
  },
  footer: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    width: 500
  },
});


