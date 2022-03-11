import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import { ComponentType } from 'react';

import { FormAddImage } from '../../Form/FormAddImage';
import { ModalAddImageProps } from './Types';

export const ModalAddImage: ComponentType<ModalAddImageProps> = ({
  isOpen,
  onClose,
}) => {
  const handleCloseModal = (): void => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered size="4xl">
      <ModalOverlay />

      <ModalContent bgColor="pGray.900">
        <ModalHeader fontSize="4xl">Nova imagem</ModalHeader>

        <ModalCloseButton />

        <ModalBody px={60}>
          <FormAddImage closeModal={handleCloseModal} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
