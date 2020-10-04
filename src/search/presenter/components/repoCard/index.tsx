import React from 'react';
import {View, Text, Switch, Alert, ActivityIndicator} from 'react-native';

import {styles} from './styles';

import {IRepoCardViewController} from '../../../interfaces/repoCard/irepo.card.view.controller';

type Props = {
  viewController: IRepoCardViewController;
};

export const RepoCard = ({viewController}: Props) => {
  function handleSwitch(): void {
    if (!viewController.switchState) {
      Alert.alert('Github Sniffer', 'Do you really want to save this repository to sniffer?', [
        {
          text: 'cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            await viewController.saveRepositoryToSniffer();
          },
        },
      ]);
    } else {
      Alert.alert('Github Sniffer', 'Do you really want to remove this repository on your sniffereds repositories?', [
        {
          text: 'cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            await viewController.removeSnifferRepository();
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
            {viewController.repository.fullName}
          </Text>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.headerDescription}>
            {viewController.repository.description}
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
