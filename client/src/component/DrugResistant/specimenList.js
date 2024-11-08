import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function FixedTags() {
  const [selectedSpecimens, setSelectedSpecimens] = React.useState([]);
  const [specimenData, setSpecimenData] = React.useState([]);

  React.useEffect(() => {
    const fetchDataSpecimen = () => {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch("http://localhost:3002/specimen", requestOptions)
        .then(response => response.json())
        .then(result => {
          setSpecimenData(result);
        })
        .catch(error => console.log('error', error));
    }

    fetchDataSpecimen();
  }, []);

  const handleChange = (event, value) => {
    setSelectedSpecimens(value);
  };

  return (
    <div>
      <Autocomplete
        multiple
        id="fixed-tags-demo"
        value={selectedSpecimens}
        onChange={handleChange}
        options={specimenData}
        getOptionLabel={(option) => option.specimen_name || "สิ่งส่งตรวจที่พบ"}
        renderInput={(params) => (
          <TextField {...params} label="สิ่งส่งตรวจที่พบ" style={{ width: '100%', minWidth: '300px'}} />
        )}
      />
      {/* ทำอะไรต่อไปกับ selectedSpecimens ก็ได้ตามที่คุณต้องการ */}
    </div>
  );
}
