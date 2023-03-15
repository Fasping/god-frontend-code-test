import Image from 'next/image';
import React from 'react';
import { Spacer, Text, useTheme, View } from 'vcc-ui';

interface Car {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

interface LinkProps {
  label: string;
  linkTo: string;
}

const CarCardLink: React.FC<LinkProps> = ({ label, linkTo }) => {
  const theme = useTheme();
  return (
    <a href={linkTo}>
      <View direction='row'>
        <Text
          extend={{ color: theme.color.foreground.action }}
          variant='bates'
          subStyle='emphasis'
        >
          {label}
        </Text>
        <Spacer size={1} />
        <Image
          alt='Small right pointing chevron'
          src='/chevron-small.svg'
          height={10}
          width={10}
        />
      </View>
    </a>
  );
};

const CarouselCarCard: React.FC<Car> = ({
  id,
  modelName,
  bodyType,
  modelType,
  imageUrl,
}) => {
  const theme = useTheme();
  return (
    <View width={320}>
      <Text
        variant='amundsen'
        subStyle='inline-link'
        extend={{ color: theme.color.foreground.secondary }}
      >
        {bodyType}
      </Text>
      <View
        direction='column'
        alignItems='baseline'
        extend={{
          fromL: {
            flexDirection: 'row',
          },
        }}
      >
        <Text variant='amundsen'>{modelName}</Text>
        <Spacer size={0.5} />
        <Text variant='columbus' subStyle='inline-link'>
          {modelType}
        </Text>
      </View>
      <div style={{ position: 'relative', width: '100%', height: '250px' }}>
        <Image
          src={imageUrl}
          alt={`Car ${id}`}
          layout='fill'
          objectFit='contain'
        />
      </div>
      <Spacer />
      <View direction='row' justifyContent='center' alignItems='center'>
        <CarCardLink label='LEARN' linkTo={`/learn/${id}`} />
        <Spacer size={3} />
        <CarCardLink label='SHOP' linkTo={`/shop/${id}`} />
      </View>
    </View>
  );
};

export default CarouselCarCard;
