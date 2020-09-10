import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

export const SettingsScreen: React.FC = ({}) => {
  const navigation = useNavigation();
  async function singout() {
    await AsyncStorage.removeItem('@account');
    navigation.navigate('signin');
  }

  async function clearCache() {
    await AsyncStorage.removeItem('@observed');
    navigation.navigate('dashboard');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchable} onPress={singout}>
        <Text>SignOut</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.touchable} onPress={clearCache}>
        <Text>Clear Observed Repos</Text>
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
  touchable: {
    backgroundColor: '#777',
    width: '90%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
