import React from 'react';
import { SafeAreaView, Platform, StatusBar, StyleSheet } from 'react-native';
import GetToken from './src/screen';

const  App = () => {
  return (
    <SafeAreaView style={styles.contaner}>
      <GetToken />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
})

export default App;
