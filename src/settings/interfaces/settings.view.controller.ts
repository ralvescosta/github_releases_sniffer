import {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-community/async-storage';
import {GithubSniffer} from '../../core/backgroundTask/githubSniffer';
import {GlobalContext} from '../../core/context/sniffed.repositories.context';

export class SettingsViewController {
  private context = useContext(GlobalContext);
  private navigation = useNavigation();

  public async singout() {
    await AsyncStorage.removeItem('@account');
    this.navigation.navigate('signin');
  }

  public async clearCache() {
    await AsyncStorage.removeItem('@sniffed');
    await this.context.setSniffedRepositories([]);
    this.navigation.navigate('dashboard');
  }

  public async turnOfNotifications() {}

  public async turnOnNotifications() {}

  public async startGithubSniffer() {
    GithubSniffer.startService();
  }

  public async stopGithubSniffer() {
    GithubSniffer.stopService();
  }
}
