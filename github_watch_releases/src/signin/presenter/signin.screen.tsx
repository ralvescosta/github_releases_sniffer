import React from 'react';
import {View, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import LottieView from 'lottie-react-native';

import styles from './signin.style';
import githubicon from '../../assets/images/github.png';
import githubAnimation from '../../assets/lottiefiles/octocat-animated.json';
import {SingInViewModel} from './signin.viewmodel';

export const SignInScreen: React.FC = ({}) => {
  const singInViewModel = new SingInViewModel();

  return (
    <View style={styles.main}>
      <LottieView source={githubAnimation} autoPlay loop />
      <View style={styles.form}>
        <TextInput
          ref={singInViewModel.githubUserInputRef}
          style={styles.signInInput}
          placeholder="Github user"
        />
        <TouchableOpacity
          style={styles.signInSubmit}
          onPress={() => singInViewModel.onPressSignIn()}>
          <Text style={styles.signInText}>SignIn With</Text>
          <Image style={styles.github} source={githubicon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
