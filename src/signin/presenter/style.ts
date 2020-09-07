import {StyleSheet} from 'react-native';
import {primary, secondary} from '../../core/themes/colors';
import {widthToDP} from '../../core/themes/size';

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
    paddingVertical: widthToDP('2.5%'),
    paddingLeft: widthToDP('4%'),
    borderRadius: 16,
    elevation: 5,
  },
  signInSubmit: {
    marginTop: widthToDP('7%'),
    width: '100%',
    backgroundColor: secondary,
    padding: widthToDP('1.5%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    elevation: 5,
  },
  signInText: {
    marginVertical: widthToDP('2.3%'),
  },
  github: {
    position: 'absolute',
    left: 15,
  },
});
