import { FormErrorMessage, Icon, Tooltip } from '@chakra-ui/react';

import { ComponentType, memo } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { ErrorFeedbackProps } from './Types';

const ErrorFeedbackComponent: ComponentType<ErrorFeedbackProps> = ({
  message,
}) => {
  return (
    <Tooltip label={message} bg="red.500">
      <FormErrorMessage
        pos="absolute"
        zIndex="tooltip"
        right={2}
        top={2}
        mt={0}
      >
        <Icon as={FiAlertCircle} color="red.500" width={4} height={4} />
      </FormErrorMessage>
    </Tooltip>
  );
};

export const ErrorFeedback = memo(
  ErrorFeedbackComponent,
  (previousProps, nextProps) =>
    previousProps.message.toLocaleLowerCase() ===
    nextProps.message.toLocaleLowerCase()
);
