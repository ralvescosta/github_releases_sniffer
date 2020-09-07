import {StyleSheet} from 'react-native';
import {primary, secondary} from '../../core/themes/colors';
import {widthToDP} from '../../core/themes/size';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: primary,
    elevation: 5,
    paddingVertical: widthToDP('1.5%'),
    paddingHorizontal: widthToDP('3%'),
  },

  resumeColumn: {},

  resumeContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  resumeText: {
    color: secondary,
    marginLeft: widthToDP('3.5%'),
  },

  accountColumn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: widthToDP('3.5%'),
    borderRadius: widthToDP('3.5%'),
  },
  accountAvatar: {
    height: 30,
    width: 30,
    borderRadius: 15,
  },
  accountUser: {
    color: secondary,
  },

  repoCard: {
    width: '95%',
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 6,
  },

  cardLeft: {},
  leftHeader: {},
  leftContent: {
    flexDirection: 'row',
    marginTop: 10,
  },
  contentDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    color: '#777',
  },
  detailsText: {
    fontSize: 13,
    marginLeft: 5,
  },
});
