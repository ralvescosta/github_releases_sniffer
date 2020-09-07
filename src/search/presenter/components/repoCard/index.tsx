import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';

import {styles} from './styles';
import search from './github_search_repo.json';

export const RepoCard: React.FC = () => {
  const [switchState, setSwitchState] = useState(false);
  return (
    <View style={styles.repoCard}>
      <View style={styles.cardLeft}>
        <View style={styles.leftHeader}>
          <Text numberOfLines={2} style={styles.headerName}>
            {search.items[0].full_name}
          </Text>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.headerDescription}>
            {search.items[0].description}
          </Text>
        </View>
      </View>

      <View style={styles.cardRight}>
        <Switch value={switchState} onValueChange={setSwitchState} />
      </View>
    </View>
  );
};
