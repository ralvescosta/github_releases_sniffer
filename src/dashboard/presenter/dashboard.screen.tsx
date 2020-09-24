import React from 'react';
import {View, ScrollView} from 'react-native';

import {styles} from './styles';

import {Header} from './components/screenHeader';

import {IDashboardViewController} from '../interfaces/dashboard/idashboard.view.controller';

type Props = {
  viewController: IDashboardViewController;
  RepoCard: any;
};

export const Dashboard = ({viewController, RepoCard}: Props) => {
  return (
    <View style={styles.container}>
      <Header account={viewController.userAccount} />
      <ScrollView style={{width: '100%'}} contentContainerStyle={{paddingBottom: 35, alignItems: 'center'}}>
        {viewController.context.sniffedRepositories.length
          ? viewController.context.sniffedRepositories.map((item: any) => <RepoCard key={item.id} repository={item} />)
          : null}
      </ScrollView>
    </View>
  );
};

export default Dashboard;
