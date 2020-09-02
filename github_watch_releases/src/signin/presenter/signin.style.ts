import {StyleSheet} from 'react-native';
import {primary, secondary} from '../../core/themes/colors';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '85%',
    alignContent: 'center',
  },
  signInInput: {
    backgroundColor: secondary,
    width: '100%',
    paddingVertical: 10,
    paddingLeft: 10,
    borderRadius: 16,
    elevation: 5,
  },
  signInSubmit: {
    marginTop: 20,
    width: '100%',
    backgroundColor: secondary,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    elevation: 5,
  },
  signInText: {
    position: 'absolute',
    left: '40%',
  },
  github: {},
});
