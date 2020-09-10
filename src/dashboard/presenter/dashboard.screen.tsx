import React, {useContext, useEffect} from 'react';
import {View, ScrollView} from 'react-native';

import {Context} from '../../core/context/observed.repositories.context';

import {styles} from './styles';

import {Header} from './components/screenHeader';
import {RepoCard} from './components/repoCard';
import AsyncStorage from '@react-native-community/async-storage';

export const Dashboard: React.FC = () => {
  const {observedRepositories, setObservedRepositories} = useContext(Context);

  useEffect(() => {
    async function getObserved() {
      const observed = await AsyncStorage.getItem('@observed');

      if (observed) {
        setObservedRepositories(JSON.parse(observed));
      }
    }
    getObserved();
  });

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={{width: '100%'}} contentContainerStyle={{paddingBottom: 35, alignItems: 'center'}}>
        {observedRepositories.length ? observedRepositories.map((item: any) => <RepoCard key={item.id} repository={item} />) : null}
      </ScrollView>
    </View>
  );
};

export default Dashboard;
