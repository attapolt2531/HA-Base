import React, { useState, useEffect } from 'react';
import { TextField, CircularProgress, Box } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
// import EditIcon from '@mui/icons-material/Edit';


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
    if (query && selectedHn === '') {
      const debounceTimer = setTimeout(() => {
        fetchData();
      }, 100);
  
      return () => clearTimeout(debounceTimer);
    }
  }, [query]);
  

  const handleAutocompleteChange = (event, value) => {
    if (value) {
      setSelectedHn(value.hn);
    } else {
      setSelectedHn('');
    }
  };



  const getData = (hn) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`http://localhost:3002/getdata/${hn}`, requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
    if (selectedHn) {
      getData(selectedHn);
    }
  }, [selectedHn]);
  



  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xxl">
       
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 1 }}
        >
          <Box>
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
          </Box>
          <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          {/* <Button onClick={handleSubmit} variant="contained" startIcon={<EditIcon />}>
             สร้างรายการใหม่
          </Button> */}
          </Box>
        </Stack>
 
        <p>Selected HN: {selectedHn}</p>
        <br />
        <hr />
      </Container>
    </React.Fragment>
  );
}
