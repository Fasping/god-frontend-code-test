import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Spacer, Text, View } from 'vcc-ui';

import chevron from '../../docs/chevron-small.svg';

interface LinkProps {
  label: string;
  linkTo: string;
}

const CarCardLink: React.FC<LinkProps> = ({ label, linkTo }) => (
  <Link href={linkTo}>
    <a href={linkTo}>
      <View direction='row' alignItems='center'>
        <Text variant='bates' subStyle='emphasis'>
          {label}
        </Text>
        <Spacer size={1} />
        <Image
          alt='Small right pointing chevron'
          src={chevron}
          height={10}
          width={10}
        />
      </View>
    </a>
  </Link>
);

export default CarCardLink;


