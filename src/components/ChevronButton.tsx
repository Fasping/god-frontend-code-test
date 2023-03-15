import Image from 'next/image';
import React from 'react';

import chevronCircle from '../../docs/chevron-circled.svg';

interface Props {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  isBackArrow?: boolean;
  altText?: string;
  transformStyle?: string;
    chevronCircle?: string;
    className?: string;
}


const ChevronButton: React.FC<Props> = ({
  onClick,
  label,
  isBackArrow = false,
}) => {
  const altText = isBackArrow ? 'Left pointing chevron' : 'Right pointing chevron';
  const transformStyle = isBackArrow ? 'rotate(180deg)' : 'rotate(0deg)';

  return (
    <button type='button' aria-label={label} onClick={onClick}>
      <Image
        alt={altText}
        style={{ transform: transformStyle }}
        src={chevronCircle}
        height={50}
        width={50}
      />
    </button>
  );
};

export default ChevronButton;
