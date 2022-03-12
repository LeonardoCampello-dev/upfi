import { Card } from '../../types/domain/Card';

export interface CardProps {
  data: Card;
  viewImage: (imageURL: string) => void;
}
