import React from 'react';
import {View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {styles} from './styles';
import search from './github_search_repo.json';

export const RepoCard: React.FC = () => {
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

        <View style={styles.leftContent}>
          <View style={styles.contentDetails}>
            <FontAwesome name="star" color="#777" size={15} />
            <Text numberOfLines={1} style={styles.detailsText}>
              {search.items[0].stargazers_count}
            </Text>
          </View>

          <View style={styles.contentDetails}>
            <FontAwesome name="code-fork" color="#777" size={15} />
            <Text numberOfLines={1} style={styles.detailsText}>
              {search.items[0].forks}
            </Text>
          </View>

          <View style={styles.contentDetails}>
            <FontAwesome name="bug" color="#777" size={15} />
            <Text numberOfLines={1} style={styles.detailsText}>
              {search.items[0].open_issues}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.cardRight}>
        <View style={styles.rightRelease}>
          <Text style={styles.releaseTitle}>Last Release: </Text>
          <Text style={styles.releaseTag}>v0.63.2</Text>
        </View>
        <FontAwesome name="bell" color="#ffe311" size={30} />
      </View>
    </View>
  );
};
