import React from 'react';
import {View, ScrollView} from 'react-native';

import {styles} from './styles';

import {Header} from './components/screenHeader';
import {RepoCard} from './components/repoCard';

import {DashboardViewController} from '../interfaces/dashboard.view.controller';

export const Dashboard: React.FC = () => {
  const controller = new DashboardViewController();

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={{width: '100%'}} contentContainerStyle={{paddingBottom: 35, alignItems: 'center'}}>
        {controller.context.sniffedRepositories.length
          ? controller.context.sniffedRepositories.map((item: any) => <RepoCard key={item.id} repository={item} />)
          : null}
      </ScrollView>
    </View>
  );
};

export default Dashboard;
