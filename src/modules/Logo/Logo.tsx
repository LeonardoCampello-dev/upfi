import { Image } from '@chakra-ui/react';

import { FC, memo } from 'react';

const LogoComponent: FC = () => {
  return <Image src="logo.svg" height={10} />;
};

export const Logo = memo(LogoComponent);
