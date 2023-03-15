import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { View, Text } from 'vcc-ui';

import cars from '../../../public/api/cars.json';
import ChevronButton from '../../../src/components/ChevronButton';

const Learn = () => {
  const router = useRouter();

  const filteredCars = cars.filter((car) => car.id !== router.query.id);
  
  return (
    <View width='100vw' padding={5}>
      <Text>
        <h2>Learn more</h2>
        <View style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
          {filteredCars.map((car) => (
            <View key={car.id} paddingBottom={4} style={{ position: 'relative' }}>
              <Image
                src={car.imageUrl}
                alt={`Car ${car.id}`}
                width={400}
                height={250}
                objectFit='contain'
              />
              <View style={{ position: 'absolute', top: 0, width: '100%' }}>
                <h3>{car.modelName}</h3>
              </View>
              <p>{car.description}</p>
            </View>
          ))}
        </View>
        <ChevronButton
          onClick={() => router.back()}
          label='Back'
          isBackArrow={true}
        />
      </Text>
    </View>
  );
};

export default Learn;









