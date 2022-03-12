export interface FormAddImageProps {
  closeModal: () => void;
}

export interface FormAddImageData {
  title: string;
  description: string;
  image: File[];
}
