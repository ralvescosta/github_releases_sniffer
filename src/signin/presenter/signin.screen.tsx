import React from 'react';
import {View, Image, TextInput, TouchableOpacity, Text, ActivityIndicator, Alert, Keyboard} from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './style';

import githubAnimation from '../../assets/lottiefiles/octocat-animated.json';
import githubicon from '../../assets/images/github.png';
import {primary} from '../../core/themes/colors';
import {widthToDP} from '../../core/themes/size';

import {ISingInViewController} from '../interfaces/isignin.view.controller';

type Props = {
  viewController: ISingInViewController;
};

export const SignInScreen: React.FC<Props> = ({viewController}) => {
  async function onPressSignIn() {
    Keyboard.dismiss();
    try {
      await viewController.onPressSignIn();
    } catch (err) {
      Alert.alert('Github WR', 'Insert a valid Github User');
    }
  }
  return (
    <View style={styles.main}>
      <LottieView source={githubAnimation} autoPlay loop />
      <View style={styles.form}>
        <TextInput
          style={styles.signInInput}
          placeholder="Github user"
          onChangeText={function (value) {
            viewController.inputValue = value;
          }}
        />
        <TouchableOpacity style={styles.signInSubmit} onPress={onPressSignIn} testID="signin-button">
          <Image style={styles.github} source={githubicon} />
          {viewController.isLoading ? (
            <ActivityIndicator color={primary} testID="signin-indicator" size={widthToDP('9%')} />
          ) : (
            <Text style={styles.signInText}>SignIn With</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
