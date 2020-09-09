import React from 'react';
import {View, TextInput, ScrollView, ActivityIndicator} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {RepoCard} from './components/repoCard';

import {styles} from './styles';

import {SearchViewController} from '../interfaces/search.view.controller';
import {SearchGithubRepositoryUsecase} from '../application/usecases/search.github.repository.usecase';
import {SearchGithubRepoRepository} from '../infrastructure/repositories/search.github.repo.repository';

export const SearchScreen: React.FC = () => {
  const searchGithubRepoRepository = new SearchGithubRepoRepository();
  const searchGithubRepositoryUsecase = new SearchGithubRepositoryUsecase(searchGithubRepoRepository);
  const searchViewController = new SearchViewController(searchGithubRepositoryUsecase);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerSearch}>
          <FontAwesome name="search" color="#000" size={15} />
          <TextInput
            placeholder="Repositorio"
            clearButtonMode="always"
            onChangeText={(text) => {
              searchViewController.setTimer(text);
            }}
          />
        </View>
      </View>
      <ScrollView style={{width: '100%'}} contentContainerStyle={{marginTop: 15, paddingBottom: 45, alignItems: 'center'}}>
        {searchViewController.isLoading ? <ActivityIndicator size={35} style={{marginVertical: 10}} color="#000" /> : null}
        {searchViewController.repositories.length
          ? searchViewController.repositories.map((repo) => <RepoCard key={repo.id} repository={repo} />)
          : null}
      </ScrollView>
    </View>
  );
};
