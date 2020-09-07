import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {styles} from './styles';

export const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <View style={styles.resumeColumn}>
        <View style={styles.resumeContent}>
          <FontAwesome name="code-fork" color="#fff" size={15} />
          <Text style={styles.resumeText}>Configured Repos: 10</Text>
        </View>
        <View style={styles.resumeContent}>
          <FontAwesome name="bell" color="#fff" size={15} />
          <Text style={styles.resumeText}>Alerts last Week: 10</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.accountColumn} activeOpacity={0.4}>
        <Image style={styles.accountAvatar} source={{uri: 'https://avatars0.githubusercontent.com/u/45952161?v=4'}} />
        <Text style={styles.accountUser}>ralvescosta</Text>
      </TouchableOpacity>
    </View>
  );
};
