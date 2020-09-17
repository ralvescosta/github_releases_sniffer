import React from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';

import {styles} from './styles';

import {Header} from './components/screenHeader';
import {RepoCard} from './components/repoCard';

import {DashboardViewController} from '../interfaces/dashboard.view.controller';

export const Dashboard = () => {
  const controller = new DashboardViewController();

  return (
    <View style={styles.container}>
      <Header account={controller.userAccount} />
      <ScrollView style={{width: '100%'}} contentContainerStyle={{paddingBottom: 35, alignItems: 'center'}}>
        {controller.context.sniffedRepositories.length
          ? controller.context.sniffedRepositories.map((item: any) => <RepoCard key={item.id} repository={item} />)
          : null}
        <TouchableOpacity
          onPress={() => {}}
          style={{
            height: 50,
            width: '100%',
            marginTop: 10,
            backgroundColor: '#ccc',
          }}>
          <Text>Notification</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Dashboard;
