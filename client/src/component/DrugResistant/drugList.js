import React, { useState, useEffect } from 'react';
import { TextField, CircularProgress } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';

export default function FixedTags() {
  const [jsonResults, setJsonResult] = useState([]);
  const [selectedDrug, setSelectedDrug] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3002/phr/${query}`);
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
  }, [query, selectedDrug]); // Include query and selectedDx in the dependency array

  const handleChange = (event, value) => {
    setSelectedDrug(value);
  };

  return (
    <div>
      <Autocomplete
  multiple
  id="fixed-tags-demo"
  value={selectedDrug}
  onChange={handleChange}
  isOptionEqualToValue={(option, value) => option.icode === value.drugname}
  noOptionsText={loading ? <CircularProgress size={20} /> : 'NO DATA'}
  options={Array.isArray(jsonResults) ? jsonResults : []}
  loading={loading}
  onInputChange={(event, newQuery, reason) => {
    if (reason !== 'reset') {
      setQuery(newQuery);
    }
  }}
  getOptionLabel={(option) => option.icode + "-" + option.drugname + option.units || "ยาที่ได้รับ"}
  renderInput={(params) => (
    <TextField {...params} label="ยาที่ได้รับ" style={{ width: '100%', minWidth: '300px' }} />
  )}
/>

    </div>
  );
}
