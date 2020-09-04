import React from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Alert,
} from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './signin.style';
import githubicon from '../../assets/images/github.png';
import githubAnimation from '../../assets/lottiefiles/octocat-animated.json';
import {SingInViewController} from '../interfaces/signin.view.controller';
import {primary} from '../../core/themes/colors';

type Props = {
  viewController: SingInViewController;
};

export const SignInScreen: React.FC<Props> = ({viewController}) => {
  async function onPressSignIn() {
    try {
      await viewController.onPressSignIn();
    } catch (err) {
      Alert.alert('Github WR', 'Tap the valid github user');
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
        <TouchableOpacity style={styles.signInSubmit} onPress={onPressSignIn}>
          {viewController.isLoading ? (
            <ActivityIndicator color={primary} style={{right: -125}} />
          ) : (
            <Text style={styles.signInText}>SignIn With</Text>
          )}
          <Image style={styles.github} source={githubicon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
