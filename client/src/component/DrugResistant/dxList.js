import React, { useState, useEffect } from 'react';
import { TextField, CircularProgress } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

export default function FixedTags() {
  const [jsonResults, setJsonResult] = useState([]);
  const [selectedDx, setSelectedDx] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3002/icd10/${query}`);
      const result = await response.json();
      console.log('API response:', result);
      setJsonResult(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      const debounceTimer = setTimeout(() => {
        fetchData();
      }, 100);

      return () => clearTimeout(debounceTimer);
    }
  }, [query, selectedDx]); // Include query and selectedDx in the dependency array

  const handleChange = (event, value) => {
    setSelectedDx(value);
  };

  return (
    <div>
      <Autocomplete
  multiple
  id="fixed-tags-demo"
  value={selectedDx}
  onChange={handleChange}
  isOptionEqualToValue={(option, value) => option.dxCode === value?.dxName}
  noOptionsText={loading ? <CircularProgress size={20} /> : 'NO DATA'}
  options={Array.isArray(jsonResults) ? jsonResults : []}
  loading={loading}
  onInputChange={(event, newQuery, reason) => {
    if (reason !== 'reset') {
      setQuery(newQuery);
    }
  }}
  getOptionLabel={(option) => option.dxCode + "-" + option.dxName || "วินิจฉัย"}
  renderInput={(params) => (
    <TextField {...params} label="วินิจฉัย" style={{ width: '100%', minWidth: '300px' }} />
  )}
/>

    </div>
  );
}
