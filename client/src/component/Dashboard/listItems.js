import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MedicationRoundedIcon from '@mui/icons-material/MedicationRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import { Link } from '@mui/material';





export const mainListItems = (
  
  <React.Fragment>
    <Link href='/' style={{textDecoration:'none',color:'green'}}>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    </Link>
    <ListItemButton>
      <ListItemIcon>
        <LocalShippingRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="บันทึกข้อมูล refer out" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="บันทึกข้อมูลการวินิจฉัยโดยไม่ใช่แพทย์" />
    </ListItemButton>
    <Link href='drugresistant' style={{textDecoration:'none',color:'#000'}}>
    <ListItemButton>
      <ListItemIcon>
        <MedicationRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="ระบบรายงานผลเชื้อดื้อยา" />
    </ListItemButton>
    </Link>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="ระบบตรวจสอบการออก AuthenCode" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
