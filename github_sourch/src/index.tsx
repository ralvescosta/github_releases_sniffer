import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

const Main = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" />
        {console.log('DEBUG')}
      </SafeAreaView>
    </>
  );
};
export default Main;
