import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { View, Button } from 'vcc-ui';

import cars from '../../../public/api/cars.json';
import ChevronButton from '../../../src/components/ChevronButton';

const Shop = () => {
  const router = useRouter();

  const filteredCars = cars.filter((car) => car.id !== router.query.id);
  
return (
  <View width='100vw' padding={5}>
    <h2>Shop</h2>
    <View style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
      {filteredCars.map((car) => (
        <div key={car.id} style={{ position: 'relative' }}>
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
          <Button
            intent="primary"
            size="medium"
            style={{ position: 'absolute', bottom: 0, width: '100%' }}
            onClick={() => alert(`You have bought a ${car.modelName}!`)}
          >
            Buy
          </Button>
        </div>
      ))}
    </View>
    <ChevronButton
      onClick={() => router.back()}
      label='Back'
      isBackArrow={true}
    />
  </View>
);

};

export default Shop;









