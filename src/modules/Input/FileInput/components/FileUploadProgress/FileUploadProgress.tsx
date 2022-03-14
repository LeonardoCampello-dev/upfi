import {
  CircularProgress,
  CircularProgressLabel,
  Text,
} from '@chakra-ui/react';

import { ComponentType } from 'react';
import { FileUploadProgressProps } from './Types';

export const FileUploadProgress: ComponentType<FileUploadProgressProps> = ({
  progress,
}) => {
  return (
    <>
      <CircularProgress
        trackColor="pGray.200"
        value={progress}
        color="orange.500"
      >
        <CircularProgressLabel>{progress}%</CircularProgressLabel>
      </CircularProgress>

      <Text as="span" pt={2} textAlign="center">
        Enviando...
      </Text>
    </>
  );
};
