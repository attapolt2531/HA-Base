import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth() {
  const [specimen, setSpecimen] = React.useState('');
  const [Itemspc, setItemspc] = React.useState('');

  const handleChange = (event) => {
    setSpecimen(event.target.value);
  };

  React.useEffect(() => {
    console.log({specimen});
  })

  const fetchDataSpecimen = () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("http://localhost:3002/specimen", requestOptions)
        .then(response => response.json())
        .then(result => {
            setItemspc(result);
            console.log(result)})
        .catch(error => console.log('error', error));
  }
  React.useEffect(() => {
    if(specimen === ''){
     fetchDataSpecimen();
    }
    
  },[specimen])

  return (
    <div>
  <FormControl sx={{ m: 1, minWidth: 150 }}>
    <InputLabel id="demo-simple-select-autowidth-label">เลือกสิ่งส่งตรวจ</InputLabel>
    <Select
      labelId="demo-simple-select-autowidth-label"
      id="demo-simple-select-autowidth"
      value={specimen}
      onChange={handleChange}
      autoWidth
      label="เลือกสิ่งส่งตรวจ"
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {Itemspc && Itemspc.map((rowspc) => (
        <MenuItem key={rowspc.specimen_code} value={rowspc.specimen_code}>
          {rowspc.specimen_name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
</div>

  );
}
