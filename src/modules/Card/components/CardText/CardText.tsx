import { Heading, Text } from '@chakra-ui/react';
import { ComponentType } from 'react';
import { CardTextProps } from './Types';

export const CardText: ComponentType<CardTextProps> = ({
  description,
  title,
}) => {
  return (
    <>
      <Heading fontSize="2xl">{title}</Heading>

      <Text mt={2.5} fontSize="md">
        {description}
      </Text>
    </>
  );
};
