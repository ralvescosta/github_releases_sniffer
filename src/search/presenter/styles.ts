import {StyleSheet} from 'react-native';
import {primary} from '../../core/themes/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    backgroundColor: primary,
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerSearch: {
    maxWidth: '90%',
    width: '100%',
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 20,
    top: 15,
    paddingHorizontal: 7,
  },

  text: {
    color: '#000',
    fontSize: 80,
  },
});
