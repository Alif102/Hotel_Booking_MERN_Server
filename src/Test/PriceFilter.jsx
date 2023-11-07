/* eslint-disable react/prop-types */
import { useState } from 'react';

function PriceFilter({ onPriceChange }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(300);

  const handleFilterChange = () => {
    onPriceChange(minPrice, maxPrice);
  };

  return (
    <div>
      <h2>Price Range Filter</h2>
      <label>
        Min Price:
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
      </label>
      <label>
        Max Price:
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </label>
      <button onClick={handleFilterChange}>Apply Filter</button>
    </div>
  );
}

export default PriceFilter;
