import * as React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import SpecimenList from './specimenList'
import DatePicker from './datePicker'
import DxList from './dxList'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DrugList from './drugList'



function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        
        // bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        // border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};



export default function FlexDirection({selectedHn}) {
    const[Items ,setItems] = React.useState("")

    const fetchDataForm = (selectedHn) => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`http://localhost:3002/getdata/${selectedHn}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                setItems(result)
                console.log(result)
            })
            .catch(error => console.log('error', error));

        console.log({selectedHn})

    }
    
    useEffect(() => {
      if(selectedHn.length > 0)
        fetchDataForm(selectedHn)        
      },[selectedHn]);

  return (
    <div style={{ width: '100%' }}>
        {Items && Items.map((row,index) => (
      <Box
        key={index}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
         
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        

        <Item>
        <TextField
          id="outlined-basic" 
          label="hn" 
          variant="outlined" 
          defaultValue={row.hn} 
          inputProps={{
          readOnly: true,
        }} 
        />
        </Item>
        <Item style={{ flex: 2, minWidth: 0 }}>
          <TextField
          id="outlined-basic" 
          label="ชื่อ" 
          variant="outlined" 
          defaultValue={row.name} 
          inputProps={{
          readOnly: true,
        }}
        sx={{ width: '100%' }} // เพิ่ม property sx เพื่อปรับความกว้างเป็น 100% 
        />
        </Item>
        <Item style={{ flex: 2, minWidth: 0 }}>
          <TextField
            id="outlined-basic"
            label="ที่อยู่"
            variant="outlined"
            defaultValue={row.address}
            inputProps={{
              readOnly: true,
            }}
            sx={{ width: '100%' }} // เพิ่ม property sx เพื่อปรับความกว้างเป็น 100%
          />
        </Item>
        
      </Box>
           
      ))}

      <Box
        
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}>

          <Item>
            <DatePicker />
          </Item>
          

        
      </Box>    
      <Box
        
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}>


          <Item>
            <SpecimenList />
          </Item>
          <Item>
            <DxList />
          </Item>
          <Item>
            <DrugList />
          </Item>
        
      </Box>    

    </div>
  );
}
