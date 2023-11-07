/* eslint-disable react/prop-types */
import { useState } from 'react';

function PriceFilter({ onPriceChange }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleFilterChange = () => {
    onPriceChange(minPrice, maxPrice);
  };

  return (
    <div className='text-center space-y-3 mb-7'>
      <h2>Price Range Filter</h2>
      <label>
        Min Price:
        <input className="input input-bordered mx-3"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(Number(e.target.value))}
        />
      </label>
      <label>
        Max Price:
        <input className="input input-bordered mx-2"
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </label>
      <button className='btn bg-[cyan]' onClick={handleFilterChange}>Apply Filter</button>
    </div>
  );
}

export default PriceFilter;
