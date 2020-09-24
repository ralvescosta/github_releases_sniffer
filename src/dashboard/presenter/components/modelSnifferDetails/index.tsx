import React from 'react';
import {Modal, View, TouchableOpacity, Text, Image} from 'react-native';

import {styles} from './styles';

import {IModalSnifferDetailsViewController} from '../../../interfaces/modalSnifferDetails/imodal.sniffer.details.view.controller';
import {SniffedGithubRepositoryEntity} from '../../../bussiness/entities/sniffed.github.repository.entity';

type Props = {
  repository: SniffedGithubRepositoryEntity;
  viewController: IModalSnifferDetailsViewController;
};

export const ModelSnifferDetails = ({repository, viewController}: Props) => {
  return (
    <Modal animationType="slide" visible={viewController.modalContext.toggleModal}>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeModal} onPress={() => viewController.closeModal()}>
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

          <TouchableOpacity onPress={() => viewController.removeRepository(repository.id)} style={styles.contentRemove}>
            <Text>Remove Repository on Sniffer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
