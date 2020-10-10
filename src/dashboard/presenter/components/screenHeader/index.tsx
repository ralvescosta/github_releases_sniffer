import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {styles} from './styles';

type Props = {
  account: {
    avatarUrl?: string;
    login?: string;
  };
  amountOfRepos: number;
  amountOfAlerts: number;
  isNetworkAvailable: boolean;
};

export const Header = ({account, amountOfRepos, amountOfAlerts, isNetworkAvailable}: Props) => {
  return (
    <View style={styles.header}>
      <View style={styles.resumeColumn}>
        <View style={styles.resumeContent}>
          <FontAwesome name="code-fork" color="#fff" size={15} />
          <Text style={styles.resumeText}>Configured Repos: {amountOfRepos}</Text>
        </View>
        <View style={styles.resumeContent}>
          <FontAwesome name="bell" color="#fff" size={15} />
          <Text style={styles.resumeText}>Alerts last Week: {amountOfAlerts}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.accountColumn} activeOpacity={0.4}>
        {isNetworkAvailable ? (
          <Image style={styles.accountAvatar} source={{uri: account?.avatarUrl}} />
        ) : (
          <View style={styles.accountFakeAvatar} />
        )}
        <Text style={styles.accountUser}>{account.login ? account.login : ''}</Text>
      </TouchableOpacity>
    </View>
  );
};
