import React, { useEffect, useState } from 'react';
import { View } from 'vcc-ui';
import Carousel from '../src/components/Carousel';

import cars from '../public/api/cars.json';
import CarouselCarCard from '../src/components/CardCar';
import FilterSelector from '../src/components/FilterSelector';

interface Car {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

const Home = () => {
  const [selectedBodyType, setSelectedBodyType] = useState<string>('');
  const bodyTypes = [...new Set(cars.map((car: Car) => car.bodyType))];
  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);

  useEffect(() => {
    if (selectedBodyType.length === 0) return setFilteredCars(cars);
    return setFilteredCars(
      cars.filter((car: Car) => car.bodyType === selectedBodyType)
    );
  }, [selectedBodyType]);

  return (
    <View width='100vw' padding={2}>
      <View paddingBottom={3}>
        <FilterSelector
          label='Filter by body type'
          list={bodyTypes}
          selectedListElement={selectedBodyType}
          setSelectedListElement={setSelectedBodyType}
        />
      </View>
      <Carousel>
        {filteredCars.map((car: Car) => (
          <div key={car.id} className='carousel__slide'>
            <CarouselCarCard
              id={car.id}
              modelName={car.modelName}
              bodyType={car.bodyType}
              modelType={car.modelType}
              imageUrl={car.imageUrl}
            />
          </div>
        ))}
      </Carousel>
    </View>
  );
};

export default Home;
