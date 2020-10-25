import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {styles} from './styles';

type Props = {
  viewController: any;
};

export const SettingsScreen = ({viewController}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header} />

      <ScrollView>
        <TouchableOpacity style={styles.touchable} onPress={() => viewController.singout}>
          <MaterialIcons name="exit-to-app" color="#000" size={24} style={styles.icon} />
          <Text>Signou</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable} onPress={() => viewController.clearCache}>
          <MaterialIcons name="clear-all" color="#000" size={24} style={styles.icon} />
          <Text>Clear sniffed repositories</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable} onPress={() => viewController.turnOfNotifications}>
          <MaterialIcons name="notifications-off" color="#000" size={24} style={styles.icon} />
          <Text>Turn-off notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable} onPress={() => viewController.turnOnNotifications}>
          <MaterialIcons name="notifications-active" color="#000" size={24} style={styles.icon} />
          <Text>Turn-on notifications</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable} onPress={() => viewController.startGithubSniffer}>
          <MaterialIcons name="visibility" color="#000" size={24} style={styles.icon} />
          <Text>Start Github repositories release sniffer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable} onPress={() => viewController.stopGithubSniffer}>
          <MaterialIcons name="visibility-off" color="#000" size={24} style={styles.icon} />
          <Text>Stop Github repositories release sniffer</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
