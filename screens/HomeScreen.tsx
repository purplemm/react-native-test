import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.homeScreenContainer}>
      <Text>Home Screen!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  homeScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});