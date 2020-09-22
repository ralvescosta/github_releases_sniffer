import React from 'react';
import {Modal, View, TouchableOpacity, Text, Image} from 'react-native';

import {styles} from './styles';

type Props = {
  repository: any;
  modalVisible: boolean;
  setModalVisible: any;
};

export const ModelSnifferDetails = ({repository, modalVisible, setModalVisible}: Props) => {
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeModal} onPress={setModalVisible}>
          <Text>X</Text>
        </TouchableOpacity>
        <View style={styles.containerContent}>
          <View style={styles.contentRepository}>
            <Image style={styles.repositoryOwnerAvatar} source={{uri: repository.ownerAvatarUrl}} />
            <Text style={styles.repositoryText}>{repository.fullName}</Text>
          </View>

          <View style={styles.contentRelease}>
            <Text style={styles.releaseTitle}> Latest release: </Text>
            <Text style={styles.releaseText}>{repository.lastRelease}</Text>
          </View>

          <TouchableOpacity onPress={() => {}} style={styles.contentRemove}>
            <Text>Remove Repository on Sniffer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
