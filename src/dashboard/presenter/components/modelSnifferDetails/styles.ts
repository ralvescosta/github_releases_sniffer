import {StyleSheet} from 'react-native';
import {widthToDP} from '../../../../core/themes/size';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  closeModal: {
    padding: widthToDP('3%'),
  },
  containerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  contentRepository: {
    width: '100%',
    alignItems: 'center',
  },
  repositoryOwnerAvatar: {
    width: 85,
    height: 85,
  },
  repositoryOwnerFakeAvatar: {
    width: 85,
    height: 85,
    backgroundColor: '#ccc',
  },
  repositoryText: {
    fontSize: widthToDP('8%'),
    fontWeight: 'bold',
    marginTop: widthToDP('2%'),
  },

  contentRelease: {
    width: '100%',
    alignItems: 'center',
  },
  releaseTitle: {
    fontSize: widthToDP('4.8%'),
  },
  releaseText: {
    fontSize: widthToDP('4.8%'),
    fontWeight: 'bold',
  },

  contentRemove: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    backgroundColor: '#fff',
  },
});
