import React from 'react';
import {View, TextInput, ScrollView, TouchableOpacity, ActivityIndicator} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {styles} from './styles';

import {ISearchViewController} from '../interfaces/isearch.view.controller';

type Props = {
  viewController: ISearchViewController;
  RepoCard: any;
};

export const SearchScreen: React.FC<Props> = ({viewController, RepoCard}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerSearch}>
          <TextInput
            placeholder="Repositorio"
            onChangeText={(text) => {
              viewController.repositoryName.current = text;
            }}
            style={styles.searchTextInput}
            onSubmitEditing={() => viewController.searchRepository()}
          />
          <TouchableOpacity style={styles.searchButton} onPress={() => viewController.searchRepository()}>
            <FontAwesome name="search" color="#000" size={15} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={{width: '100%'}} contentContainerStyle={{marginTop: 15, paddingBottom: 45, alignItems: 'center'}}>
        {viewController.isLoading ? <ActivityIndicator size={35} style={{marginVertical: 10}} color="#000" /> : null}
        {viewController.foundRepositories.current.length
          ? viewController.foundRepositories.current.map((repo) => <RepoCard key={repo.id} repository={repo} />)
          : null}
      </ScrollView>
    </View>
  );
};
