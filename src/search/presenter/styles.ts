import {StyleSheet} from 'react-native';
import {primary} from '../../core/themes/colors';
import {widthToDP} from '../../core/themes/size';

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

  searchTextInput: {
    width: '85%',
    // borderWidth: 2,
    // borderColor: '#000',
  },
  searchButton: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  networkInfo: {
    position: 'absolute',
    bottom: -widthToDP('155%'),
    width: widthToDP('100%'),
    padding: widthToDP('2%'),
    backgroundColor: '#f00',
    alignItems: 'center',
  },
  networkInfoText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
