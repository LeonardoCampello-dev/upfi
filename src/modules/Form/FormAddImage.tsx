import { Box, Stack, useToast } from '@chakra-ui/react';

import { ComponentType, useCallback, useState } from 'react';
import { SendButton } from './components/SendButton';
import { useFormAddImage } from './hooks/useFormAddImage';
import { FileInput, TextInput } from '../Input';
import { Image } from '../../types/Image';
import { FormAddImageProps } from './Types';
import { FormAddImageValidation } from '../../validation';

export const FormAddImage: ComponentType<FormAddImageProps> = ({
  closeModal,
}) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [localImageUrl, setLocalImageUrl] = useState<string>('');

  const toast = useToast();

  const { createImage, isCreatingImage, form } = useFormAddImage();

  const clearStatesAndForm = useCallback((): void => {
    closeModal();

    setImageUrl('');
    setLocalImageUrl('');

    form.reset();
  }, [closeModal, form]);

  const onSubmit = useCallback(
    async (data: Image): Promise<void> => {
      try {
        if (!data.image || !imageUrl) {
          toast({ title: 'Error', status: 'error' });

          return;
        }

        await createImage({
          url: imageUrl,
          title: data.title,
          description: data.description,
        });
      } finally {
        clearStatesAndForm();
      }
    },
    [clearStatesAndForm, createImage, imageUrl, toast]
  );

  return (
    <Box as="form" width="100%" onSubmit={form.handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <FileInput
          {...form.register('image', FormAddImageValidation.image)}
          setImageUrl={setImageUrl}
          localImageUrl={localImageUrl}
          setLocalImageUrl={setLocalImageUrl}
          setError={form.setError}
          trigger={form.trigger}
          error={form.formState.errors.image}
        />

        <TextInput
          {...form.register('title', FormAddImageValidation.title)}
          placeholder="Título da imagem..."
          error={form.formState.errors.title}
        />

        <TextInput
          {...form.register('description', FormAddImageValidation.description)}
          placeholder="Descrição da imagem..."
          error={form.formState.errors.description}
        />
      </Stack>

      <SendButton
        isSubmitting={form.formState.isSubmitting || isCreatingImage}
      />
    </Box>
  );
};
