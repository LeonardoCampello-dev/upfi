import { makeFormDataParams } from './Types';

export const makeFormData = ({ name, value }: makeFormDataParams): FormData => {
  const formData = new FormData();

  formData.append(name, value);
  formData.append('key', process.env.NEXT_PUBLIC_IMGBB_API_KEY);

  return formData;
};
