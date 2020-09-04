import React from 'react';
import {View, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './signin.style';
import githubicon from '../../assets/images/github.png';
import githubAnimation from '../../assets/lottiefiles/octocat-animated.json';
import {SingInViewController} from './signin.view.controller';

export const SignInScreen: React.FC = ({}) => {
  const singInViewController = new SingInViewController();

  return (
    <View style={styles.main}>
      <LottieView source={githubAnimation} autoPlay loop />
      <View style={styles.form}>
        <TextInput
          style={styles.signInInput}
          placeholder="Github user"
          onChangeText={(value) => {
            singInViewController.inputValue = value;
          }}
        />
        <TouchableOpacity
          style={styles.signInSubmit}
          onPress={() => singInViewController.onPressSignIn()}>
          <Text style={styles.signInText}>SignIn With</Text>
          <Image style={styles.github} source={githubicon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
