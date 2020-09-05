import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {primary, secondary} from '../../core/themes/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const Dashboard: React.FC = () => {
  return (
    <View style={styles.container}>
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

      <Text style={styles.text}>Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: primary,
    elevation: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },

  resumeColumn: {},

  resumeContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  resumeText: {
    color: secondary,
    marginLeft: 10,
  },

  accountColumn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  accountAvatar: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  accountUser: {
    marginLeft: 10,
    color: secondary,
  },
  text: {
    color: '#000',
    fontSize: 80,
  },
});

export default Dashboard;
