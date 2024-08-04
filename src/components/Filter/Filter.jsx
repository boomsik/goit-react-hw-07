import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="Filter">
      <label>
        Find contacts by name:
        <input type="text" value={filter} onChange={handleChange} />
      </label>
    </div>
  );
};

export default Filter;
