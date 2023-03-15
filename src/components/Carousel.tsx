import React, { useCallback, useEffect, useState } from 'react';
import { useTheme, View } from 'vcc-ui';
import useEmblaCarousel from 'embla-carousel-react';
import ChevronButton from './ChevronButton';

interface Props {
  children: React.ReactNode[];
}

const Carousel: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  const [carouselRef, carousel] = useEmblaCarousel({
    skipSnaps: false,
    align: 'start',
    containScroll: 'trimSnaps',
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<Array<number>>([]);

  const scrollPrev = useCallback(
    () => carousel && carousel.scrollPrev(),
    [carousel]
  );
  const scrollNext = useCallback(
    () => carousel && carousel.scrollNext(),
    [carousel]
  );

  const onSelect = useCallback(() => {
    if (!carousel) return;
    setSelectedIndex(carousel.selectedScrollSnap());
  }, [carousel, setSelectedIndex]);

  useEffect(() => {
    if (!carousel) return;
    onSelect();
    setScrollSnaps(carousel.scrollSnapList());
    carousel.on('select', onSelect);
  }, [carousel, setScrollSnaps, onSelect]);

  useEffect(() => {
    if (!carousel) return;
    carousel.reInit();
    setSelectedIndex(0);
    setScrollSnaps(carousel.scrollSnapList());
    carousel.scrollTo(0);
  }, [children, carousel]);

  return (
    <View>
      <div className='carousel' ref={carouselRef}>
        <div className='carousel__container'>{children}</div>
        <View
          paddingTop={3}
          extend={{
            fromL: {
              display: 'none',
            },
          }}
        >
          <div className='carousel__navigator'>
            {scrollSnaps.map((_, index) => (
              <div
                className='carousel__dots'
                key={`dot-${index}`}
                style={{
                  backgroundColor:
                    selectedIndex === index
                      ? theme.color.foreground.primary
                      : theme.color.ornament.border,
                }}
              />
            ))}
          </div>
        </View>
      </div>
      <View
        padding={5}
        justifyContent='flex-end'
        direction='row'
        width='100%'
        extend={{
          display: 'none',
          fromL: {
            display: 'flex',
          },
        }}
      >
        <ChevronButton onClick={scrollPrev} isBackArrow label='Previous' />
        <ChevronButton onClick={scrollNext} label='Next' />
      </View>
    </View>
  );
};

export default Carousel;
