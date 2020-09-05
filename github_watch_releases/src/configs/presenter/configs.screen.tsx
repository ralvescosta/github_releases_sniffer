import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ConfigsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Configs Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 80,
  },
});

export default ConfigsScreen;
