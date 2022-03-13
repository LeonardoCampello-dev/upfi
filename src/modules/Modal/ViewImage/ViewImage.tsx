import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
  Button,
} from '@chakra-ui/react';

import { ComponentType } from 'react';

import { ModalViewImageProps } from './Types';

export const ModalViewImage: ComponentType<ModalViewImageProps> = ({
  isOpen,
  onClose,
  imgUrl,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalBody>
          <Image src={imgUrl} />
        </ModalBody>

        <ModalFooter>
          <Link href={imgUrl} isExternal>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
