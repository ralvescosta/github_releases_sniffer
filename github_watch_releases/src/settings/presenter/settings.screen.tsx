import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

export const SettingsScreen: React.FC = ({}) => {
  async function singout() {
    await AsyncStorage.removeItem('@account');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings Screen</Text>
      <TouchableOpacity onPress={singout}>
        <Text>SignOut</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 80,
  },
});
