import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {styles} from './styles';

import {Header} from './components/screenHeader';
import {RepoCard} from './components/repoCard';

export const Dashboard: React.FC = () => {
  const [state, setState] = useState([]);

  async function getObservedRepos() {
    const observed = await AsyncStorage.getItem('@observed');

    if (observed) {
      setState(JSON.parse(observed));
    }
  }

  useEffect(() => {
    console.log('effect');
    getObservedRepos();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={{width: '100%'}} contentContainerStyle={{paddingBottom: 35, alignItems: 'center'}}>
        {state.length ? state.map((item) => <RepoCard key={item.id} repository={item} />) : null}
      </ScrollView>
    </View>
  );
};

export default Dashboard;
