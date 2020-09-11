import React, {useState} from 'react';
import {View, Text, Switch, Alert, ActivityIndicator} from 'react-native';

import {styles} from './styles';

import {ResultSearchGithubRepositoryEntity} from '../../../bussiness/entities/result.search.github.repository.entity';

type Props = {
  repository: ResultSearchGithubRepositoryEntity;
  saveRepoToObserver: Function;
  removeRepoSniffed?: Function;
};

export const RepoCard: React.FC<Props> = ({repository, saveRepoToObserver}) => {
  const [switchState, setSwitchState] = useState(repository.checked);
  const [loading, setLoading] = useState(false);

  function handleSwitch(): void {
    if (!switchState) {
      Alert.alert('Github Sniffer', 'Voce deseja marcar este repositorio para ter sua release monitorada?', [
        {
          text: 'cancel',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            setLoading(true);
            await saveRepoToObserver();
            setLoading(false);
            setSwitchState(true);
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
        {loading ? <ActivityIndicator color="#000" /> : <Switch value={switchState} onValueChange={handleSwitch} />}
      </View>
    </View>
  );
};
