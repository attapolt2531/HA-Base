import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import { Stack } from '@mui/material';
import { Autocomplete } from '@mui/material';
import { Box, CircularProgress } from '@mui/material';

export default function LiveSearch() {
  const [jsonResults, setJsonResult] = useState([]);
  const [selectedHn, setSelectedHn] = useState('');
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:3002/livesearch/${query}`);
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
  });


  const handleAutocompleteChange = (event, value) => {
    if (value) {
      setSelectedHn(value.hn);
    } else {
      setSelectedHn('');
    }
  };

  return (
    <Stack sx={{ width: 350 }}>
      <Autocomplete
        id="hn"
        getOptionLabel={(option) => `${option.hn} ${option.fullname}`}
        options={Array.isArray(jsonResults) ? jsonResults : []}
        sx={{ width: 350 }}
        isOptionEqualToValue={(option, value) => option.hn === value?.hn}
        noOptionsText={loading ? <CircularProgress size={20} /> : 'NO DATA'}
        loading={loading}
        onInputChange={(event, newQuery, reason) => {
            if (reason !== 'reset') {
            setQuery(newQuery);
            }
        }}
        onChange={handleAutocompleteChange}
        renderOption={(props, option) => (
            <Box component="li" {...props} key={option.hn}>
            {option.hn} {option.fullname}
            </Box>
        )}
  renderInput={(params) => <TextField {...params} label="Search" />}
/>


      <p>Selected HN: {selectedHn}</p>
    </Stack>
  );
}
