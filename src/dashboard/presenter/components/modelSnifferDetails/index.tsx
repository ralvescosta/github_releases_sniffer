import React, {useContext} from 'react';
import {Modal, View, TouchableOpacity, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {styles} from './styles';
import {SniffedRepositoriesContext} from '../../../../core/context/sniffed.repositories.context';

type Props = {
  repository: any;
  modalVisible: boolean;
  setModalVisible: any;
};

export const ModelSnifferDetails = ({repository, modalVisible, setModalVisible}: Props) => {
  const context = useContext(SniffedRepositoriesContext);

  async function removeRepository() {
    const sniffed = context.sniffedRepositories;
    const filter = sniffed.filter((item: any) => item.id !== repository.id);

    context.setSniffedRepositories(filter);
    await AsyncStorage.setItem('@sniffed', JSON.stringify(filter));
  }

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeModal} onPress={setModalVisible}>
          <Text>X</Text>
        </TouchableOpacity>
        <View style={styles.containerContent}>
          <View style={styles.contentRepository}>
            <Image style={styles.repositoryOwnerAvatar} source={{uri: repository.ownerAvatarUrl}} resizeMode="cover" />
            <Text style={styles.repositoryText}>{repository.fullName}</Text>
          </View>

          <View style={styles.contentRelease}>
            <Text style={styles.releaseTitle}> Latest release: </Text>
            <Text style={styles.releaseText}>{repository.lastRelease}</Text>
          </View>

          <TouchableOpacity onPress={removeRepository} style={styles.contentRemove}>
            <Text>Remove Repository on Sniffer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
