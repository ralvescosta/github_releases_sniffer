import React from 'react';
import {View, TextInput, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {RepoCard} from './components/repoCard';

import {styles} from './styles';

export const SearchScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerSearch}>
          <FontAwesome name="search" color="#000" size={15} />
          <TextInput placeholder="Repositorio" />
        </View>
      </View>
      <ScrollView style={{width: '100%'}} contentContainerStyle={{marginTop: 15, paddingBottom: 45, alignItems: 'center'}}>
        <RepoCard />
        <RepoCard />
        <RepoCard />
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
