import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

export interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedImageURL, setSelectedImageURL] = useState<string>('');

  const handleViewImage = (url: string): void => {
    setSelectedImageURL(url);

    onOpen();
  };

  return (
    <>
      <SimpleGrid columns={3} spacing={40}>
        {cards.map(card => (
          <Card
            key={card.id}
            data={card}
            viewImage={() => handleViewImage(card.url)}
          />
        ))}
      </SimpleGrid>

      {isOpen && (
        <ModalViewImage
          isOpen={isOpen}
          imgUrl={selectedImageURL}
          onClose={onClose}
        />
      )}
    </>
  );
}
