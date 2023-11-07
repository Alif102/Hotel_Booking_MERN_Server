import { useState } from "react";

const FilterBar = () => {
    const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleFilter = ({onFilter }) => {
    onFilter(minPrice, maxPrice);
  };
  return (
    <div>
         <div className="filter-bar">
      <input
        type="number"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />

<div className="form-control">
          <label className="label">
            <span className="label-text">Min Pricee</span>
          </label>
          <input className="input input-bordered" type="number" 
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
           />
          
        </div>


      <input
        type="number"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button onClick={handleFilter}>Filter</button>
    </div>
    </div>
  )
}

export default FilterBar