import {StyleSheet} from 'react-native';
import {primary} from '../../core/themes/colors';
import {widthToDP} from '../../core/themes/size';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
  },
  header: {
    backgroundColor: primary,
    width: '100%',
    elevation: 5,
    height: widthToDP('5%'),
  },
  touchable: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    backgroundColor: '#fff',
    marginBottom: 5,
  },
  icon: {
    transform: [{rotateY: '180deg'}],
    position: 'absolute',
    left: 10,
  },
});
