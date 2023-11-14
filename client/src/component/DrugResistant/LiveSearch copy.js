import React, { useState, useEffect } from 'react';
import { TextField, Stack, Autocomplete, Box, CircularProgress } from '@mui/material';

export default function LiveSearch() {
  const [jsonResults, setJsonResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost/api/PatientApi.php?q=${query}`);
      const result = await response.json();
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
      }, 500); // รอ 500 มิลลิวินาทีหลังจากที่ผู้ใช้พิมพ์

      return () => clearTimeout(debounceTimer);
    }
  });

  return (
    <Stack sx={{ width: 300 }}>
      <Autocomplete
        id="hn"
        getOptionLabel={(option) => `${option.hn} ${option.fullname}`}
        options={jsonResults}
        sx={{ width: 300 }}
        isOptionEqualToValue={(option, value) => option.hn === value.hn}
        noOptionsText={loading ? <CircularProgress size={20} /> : 'NO DATA'}
        loading={loading}
        onInputChange={(event, newQuery) => setQuery(newQuery)}
        renderOption={(props, option) => (
          <Box component="li" {...props} key={option.hn}>
            {option.hn} {option.fullname}
          </Box>
        )}
        renderInput={(params) => <TextField {...params} label="Search" />}
      />
    </Stack>
  );
}
