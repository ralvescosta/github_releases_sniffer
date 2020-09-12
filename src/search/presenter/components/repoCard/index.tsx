import React from 'react';
import {View, Text, Switch, Alert, ActivityIndicator} from 'react-native';

import {styles} from './styles';

import {ResultSearchGithubRepositoryEntity} from '../../../bussiness/entities/result.search.github.repository.entity';

import {SaveRepositoryToSnifferUsecase} from '../../../application/usecases/save.repositrory.to.sniffer.usecase';
import {RepoCardViewController} from '../../../interfaces/repo.card.view.controller';
import {SaveLocallySniffedRepository} from '../../../infrastructure/repositories/save.locally.sniffed.repository';
import {GetLastSniffedReleaseRepository} from '../../../infrastructure/repositories/get.last.sniffed.release.repository';

type Props = {
  repository: ResultSearchGithubRepositoryEntity;
};

export const RepoCard = ({repository}: Props) => {
  const saveRepositoryToSnifferUsecase = new SaveRepositoryToSnifferUsecase(
    SaveLocallySniffedRepository.getInstance(),
    GetLastSniffedReleaseRepository.getInstance(),
  );
  const viewController = new RepoCardViewController(repository, saveRepositoryToSnifferUsecase);

  function handleSwitch(): void {
    if (!viewController.switchState) {
      Alert.alert('Github Sniffer', 'Voce deseja marcar este repositorio para ter sua release monitorada?', [
        {
          text: 'cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            await viewController.saveRepoToObserver();
          },
        },
      ]);
    }
  }

  return (
    <View style={styles.repoCard}>
      <View style={styles.cardLeft}>
        <View style={styles.leftHeader}>
          <Text numberOfLines={2} style={styles.headerName}>
            {repository.fullName}
          </Text>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.headerDescription}>
            {repository.description}
          </Text>
        </View>
      </View>

      <View style={styles.cardRight}>
        {viewController.loading ? (
          <ActivityIndicator color="#000" />
        ) : (
          <Switch value={viewController.switchState} onValueChange={handleSwitch} />
        )}
      </View>
    </View>
  );
};
