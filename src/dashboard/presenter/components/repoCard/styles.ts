import {StyleSheet} from 'react-native';
// import {primary, secondary} from '../../../../core/themes/colors';
import {widthToDP} from '../../../../core/themes/size';

export const styles = StyleSheet.create({
  repoCard: {
    width: '100%',
    flexDirection: 'row',
    padding: widthToDP('2%'),
    backgroundColor: '#fff',
    elevation: 5,
    borderRadius: 6,
    marginTop: widthToDP('2%'),
    // borderWidth: 2,
    // borderColor: '#000',
  },

  cardLeft: {
    maxWidth: '60%',
    width: '100%',
    // borderWidth: 2,
    // borderColor: '#000',
  },

  leftHeader: {},
  headerName: {
    fontWeight: 'bold',
  },
  headerDescription: {
    color: '#777',
    marginTop: widthToDP('0.5%'),
  },

  leftContent: {
    flexDirection: 'row',
    marginTop: widthToDP('2%'),
  },
  contentDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 7,
    color: '#777',
  },
  detailsText: {
    fontSize: widthToDP('3.4%'),
    marginLeft: 3,
    maxWidth: 40,
  },

  cardRight: {
    maxWidth: '40%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: '#000',
  },
  rightRelease: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  releaseTitle: {
    fontWeight: 'bold',
  },
  releaseTag: {
    color: '#777',
  },
});
