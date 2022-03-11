import { Card } from '../../types/Card';

export interface CardProps {
  data: Card;
  viewImage: (imageURL: string) => void;
}
