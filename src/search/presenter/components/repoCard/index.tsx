import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';

import {styles} from './styles';
import {ResultSearchGithubRepositoryEntity} from '../../../bussiness/entities/result.search.github.repository.entity';

type Props = {
  repository: ResultSearchGithubRepositoryEntity;
};

export const RepoCard: React.FC<Props> = ({repository}) => {
  const [switchState, setSwitchState] = useState(false);
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
        <Switch value={switchState} onValueChange={setSwitchState} />
      </View>
    </View>
  );
};
