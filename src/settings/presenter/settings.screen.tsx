import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {GithubSniffer} from '../../core/backgroundTask/githubSniffer';

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

  async function turnOfNotifications() {}

  async function turnOnNotifications() {}

  async function startGithubSniffer() {
    GithubSniffer.startService();
  }

  async function stopGithubSniffer() {
    GithubSniffer.stopService();
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

        <TouchableOpacity style={styles.touchable} onPress={turnOfNotifications}>
          <MaterialIcons name="notifications-off" color="#000" size={24} style={styles.icon} />
          <Text>Turn-off notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable} onPress={turnOnNotifications}>
          <MaterialIcons name="notifications-active" color="#000" size={24} style={styles.icon} />
          <Text>Turn-on notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable} onPress={startGithubSniffer}>
          <MaterialIcons name="visibility" color="#000" size={24} style={styles.icon} />
          <Text>Start Github repositories release sniffer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable} onPress={stopGithubSniffer}>
          <MaterialIcons name="visibility-off" color="#000" size={24} style={styles.icon} />
          <Text>Stop Github repositories release sniffer</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
