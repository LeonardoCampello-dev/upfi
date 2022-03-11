import { Box, Button, Stack, useToast } from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import { ComponentType, useState } from 'react';
import { useMutation } from 'react-query';

import { queryClient } from '../../config/query-client';
import { FileInput, TextInput } from '../Input';
import { CreateImageRequestDTO, FormAddImageProps } from './Types';
import { api } from '../../services/api';

export const FormAddImage: ComponentType<FormAddImageProps> = ({
  closeModal,
}) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [localImageUrl, setLocalImageUrl] = useState<string>('');

  const toast = useToast();

  const validImageFormats =
    /(?:([^:/?#]+):)?(?:([^/?#]*))?([^?#](?:jpeg|gif|png))(?:\?([^#]*))?(?:#(.*))?/g;

  const formValidations = {
    image: {
      required: 'Arquivo obrigatório',
      validate: {
        lessThan10MB: fileList =>
          fileList[0].size < 10000000 || 'O arquivo deve ser menor que 10MB',
        acceptedFormats: fileList =>
          validImageFormats.test(fileList[0].type) ||
          'Somente são aceitos arquivos PNG, JPEG e GIF',
      },
    },
    title: {
      required: 'Título obrigatório',
      minLength: {
        value: 2,
        message: 'Mínimo de 2 caracteres',
      },
      maxLength: {
        value: 20,
        message: 'Máximo de 20 caracteres',
      },
    },
    description: {
      required: 'Descrição obrigatória',
      maxLength: {
        value: 65,
        message: 'Máximo de 65 caracteres',
      },
    },
  };

  const { mutateAsync: save } = useMutation(
    async (data: CreateImageRequestDTO) => {
      const { data: image } = await api.post('/api/images', {
        url: imageUrl,
        title: data.title,
        description: data.description,
      });

      return image;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('images');
      },
    }
  );

  const { register, handleSubmit, reset, formState, setError, trigger } =
    useForm();

  const clearStatesAndForm = (): void => {
    closeModal();

    setImageUrl('');
    setLocalImageUrl('');

    reset();
  };

  const onSubmit = async (data: CreateImageRequestDTO): Promise<void> => {
    try {
      if (!data.image || !imageUrl) {
        toast({ title: 'Error', status: 'error' });

        return;
      }

      await save(data);

      toast({ title: 'Success', status: 'success' });
    } catch {
      toast({ title: 'Error', status: 'error' });
    } finally {
      clearStatesAndForm();
    }
  };

  return (
    <Box as="form" width="100%" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <FileInput
          {...register('image', formValidations.image)}
          setImageUrl={setImageUrl}
          localImageUrl={localImageUrl}
          setLocalImageUrl={setLocalImageUrl}
          setError={setError}
          trigger={trigger}
          error={formState.errors.image}
        />

        <TextInput
          {...register('title', formValidations.title)}
          placeholder="Título da imagem..."
          error={formState.errors.title}
        />

        <TextInput
          {...register('description', formValidations.description)}
          placeholder="Descrição da imagem..."
          error={formState.errors.description}
        />
      </Stack>

      <Button
        my={6}
        isLoading={formState.isSubmitting}
        isDisabled={formState.isSubmitting}
        type="submit"
        width="100%"
        py={6}
      >
        Enviar
      </Button>
    </Box>
  );
};
