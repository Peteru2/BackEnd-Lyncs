
import React, { useState } from 'react';
const MarketImg = ({ options, onSelectionChange }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    // Check if the option is already selected, and toggle its selection
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
    onSelectionChange(selectedOptions.length > 0);
  };
  console.log('Selected Options:', selectedOptions);
  
    return ( 
        <>
            <section>
            <div className={`grid grid-cols-3 items-center `}>
                {options.map((option) => (
                <div
                    key={option.id}
                    className={`m-2 h-40 rounded-lg flex items-center w-62 ${selectedOptions.includes(option) ? 'border-2 border-yellow-400' : 'border-2'}`}
                    onClick={() => handleOptionClick(option)}
                >
                    <img src={option.imageUrl} alt={option.name} />
                </div>
                ))}
            </div>
            </section>
        </>
     );
}
 
export default MarketImg;