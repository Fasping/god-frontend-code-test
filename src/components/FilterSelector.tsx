import React, { useMemo } from 'react';
import { SelectInput } from 'vcc-ui';

interface Props {
  label: string;
  list: string[];
  selectedListElement: string;
  setSelectedListElement: React.Dispatch<React.SetStateAction<string>>;
}

const FilterSelector: React.FC<Props> = ({
  label,
  list,
  selectedListElement,
  setSelectedListElement,
}) => {
  const renderOptions = useMemo(() => {
    return (
      <>
        <option value=''>All</option>
        {list.map((element) => (
          <option key={element} value={element}>
            {element.charAt(0).toUpperCase() + element.slice(1)}
          </option>
        ))}
      </>
    );
  }, [list]);

  return (
    <SelectInput
      label={label}
      value={selectedListElement}
      onChange={(e) => setSelectedListElement(e.target.value)}
    >
      {renderOptions}
    </SelectInput>
  );
};

export default FilterSelector;

