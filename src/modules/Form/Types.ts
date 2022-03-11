export interface FormAddImageProps {
  closeModal: () => void;
}

export interface CreateImageRequestDTO {
  title: string;
  description: string;
  image: unknown;
}
