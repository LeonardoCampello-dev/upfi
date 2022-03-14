import { Box, FormLabel, FormControl, useToast } from '@chakra-ui/react';

import axios, { AxiosRequestConfig, CancelTokenSource } from 'axios';

import {
  useState,
  ForwardRefRenderFunction,
  forwardRef,
  useCallback,
  useEffect,
  ChangeEvent,
} from 'react';

import {
  AddYourImage,
  ErrorFeedback,
  FileUploadProgress,
  ImageUploaded,
  UploadContainer,
} from './components';

import { FileInputProps } from './Types';
import { api } from '../../../services/api';

const FileInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  FileInputProps
> = (
  {
    name,
    error = null,
    setImageUrl,
    localImageUrl,
    setLocalImageUrl,
    setError,
    onChange,
    trigger,
    ...rest
  },
  ref
) => {
  const imgBBuploadURL = 'https://api.imgbb.com/1/upload';

  const toast = useToast();

  const [progress, setProgress] = useState<number>(0);
  const [isSending, setIsSending] = useState<boolean>(false);

  const [cancelToken, setCancelToken] = useState<CancelTokenSource>(
    {} as CancelTokenSource
  );

  const handleImageUpload = useCallback(
    async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
      if (!event.target.files?.length) {
        return;
      }

      setImageUrl('');
      setLocalImageUrl('');
      setError('image', null);
      setIsSending(true);

      await onChange(event);

      trigger('image');

      const formData = new FormData();

      formData.append(event.target.name, event.target.files[0]);
      formData.append('key', process.env.NEXT_PUBLIC_IMGBB_API_KEY);

      const { CancelToken } = axios;

      const source = CancelToken.source();

      setCancelToken(source);

      const config = {
        headers: { 'content-type': 'multipart/form-data' },
        onUploadProgress: (progressEvent: ProgressEvent) => {
          setProgress(
            Math.round((progressEvent.loaded * 100) / progressEvent.total)
          );
        },
        cancelToken: source.token,
      } as AxiosRequestConfig;

      try {
        const response = await api.post(imgBBuploadURL, formData, config);

        setImageUrl(response.data.data.url);
        setLocalImageUrl(URL.createObjectURL(event.target.files[0]));
      } catch (err) {
        if (err?.message === 'Cancelled image upload.') return;

        toast({
          title: 'Falha no envio',
          description: 'Ocorreu um erro ao realizar o upload da sua imagem.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      } finally {
        setIsSending(false);
        setProgress(0);
      }
    },
    [onChange, setError, setImageUrl, setLocalImageUrl, trigger, toast]
  );

  useEffect(() => {
    if (error?.message && isSending && cancelToken?.cancel) {
      cancelToken.cancel('Cancelled image upload.');

      setCancelToken(null);
    }
  }, [cancelToken, error, isSending]);

  return (
    <FormControl isInvalid={Boolean(error)}>
      <FormLabel
        mx="auto"
        width={40}
        height={40}
        htmlFor={name}
        cursor={isSending ? 'progress' : 'pointer'}
        opacity={isSending ? 0.5 : 1}
      >
        {localImageUrl && !isSending ? (
          <ImageUploaded imageURL={localImageUrl} />
        ) : (
          <UploadContainer isError={Boolean(error?.message)}>
            {isSending ? (
              <FileUploadProgress progress={progress} />
            ) : (
              <Box pos="relative" height="full">
                {Boolean(error) && <ErrorFeedback message={error.message} />}

                <AddYourImage />
              </Box>
            )}
          </UploadContainer>
        )}

        <input
          data-testid={name}
          disabled={isSending}
          id={name}
          name={name}
          onChange={handleImageUpload}
          ref={ref}
          type="file"
          style={{
            display: 'none',
          }}
          {...rest}
        />
      </FormLabel>
    </FormControl>
  );
};

export const FileInput = forwardRef(FileInputBase);
