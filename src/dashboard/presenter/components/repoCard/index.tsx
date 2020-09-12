import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {styles} from './styles';

type Props = {
  repository: any;
};

export const RepoCard: React.FC<Props> = ({repository}) => {
  return (
    <View style={styles.repoCard}>
      <View style={styles.cardLeft}>
        <View style={styles.leftHeader}>
          <Text numberOfLines={2} style={styles.headerName}>
            {repository.fullName}
          </Text>
          <Text numberOfLines={4} ellipsizeMode="tail" style={styles.headerDescription}>
            {repository.description}
          </Text>
        </View>

        <View style={styles.leftContent}>
          <View style={styles.contentDetails}>
            <FontAwesome name="star" color="#777" size={15} />
            <Text numberOfLines={1} style={styles.detailsText}>
              {repository.stargazersCount}
            </Text>
          </View>

          <View style={styles.contentDetails}>
            <FontAwesome name="code-fork" color="#777" size={15} />
            <Text numberOfLines={1} style={styles.detailsText}>
              {repository.forks}
            </Text>
          </View>

          <View style={styles.contentDetails}>
            <FontAwesome name="bug" color="#777" size={15} />
            <Text numberOfLines={1} style={styles.detailsText}>
              {repository.openIssues}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.cardRight}>
        <View style={styles.rightRelease}>
          <Text style={styles.releaseTitle}>Last Release: </Text>
          <Text style={styles.releaseTag}>{repository.lastRelease}</Text>
        </View>
        <FontAwesome name="bell" color="#ffe311" size={30} />
      </View>
    </View>
  );
};
