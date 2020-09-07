import React from 'react';
import {View, ScrollView} from 'react-native';

import {styles} from './styles';

import {Header} from './components/screenHeader';
import {RepoCard} from './components/repoCard';

export const Dashboard: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={{width: '100%'}} contentContainerStyle={{paddingBottom: 35, alignItems: 'center'}}>
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
      </ScrollView>
    </View>
  );
};

export default Dashboard;
