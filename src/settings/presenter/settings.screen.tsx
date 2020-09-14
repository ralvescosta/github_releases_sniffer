import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles';
import {SniffedRepositoriesContext} from '../../core/context/sniffed.repositories.context';

export const SettingsScreen = ({}) => {
  const navigation = useNavigation();
  const context = useContext(SniffedRepositoriesContext);

  async function singout() {
    await AsyncStorage.removeItem('@account');
    navigation.navigate('signin');
  }

  async function clearCache() {
    await AsyncStorage.removeItem('@sniffed');
    await context.setSniffedRepositories([]);
    navigation.navigate('dashboard');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header} />

      <ScrollView>
        <TouchableOpacity style={styles.touchable} onPress={singout}>
          <MaterialIcons name="exit-to-app" color="#000" size={24} style={styles.icon} />
          <Text>Signou</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable} onPress={clearCache}>
          <MaterialIcons name="clear-all" color="#000" size={24} style={styles.icon} />
          <Text>Clear sniffed repositories</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
