import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(name,hn,address,results,Specimen,date,dx,drug,redate,Discharge) {
  return { name,hn,address,results,Specimen,date,dx,drug,redate,Discharge };
}

const rows = [
  createData(
    'นายทดสอบ ทดสอบระบบ',
    '0000011234',
    '109 หมู่4 ต.สร้างคอม อ.สร้างคอม จ.อุดรธานี',
    'Escherichia coli ESBL',
    'Hemoculture',
    '13 พ.ย. 66',
    'Pneumonia',
    ['Ceftriaxone'],
    '13 เม.ย. 67',
    ''
  ),
  
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>รายการบันทึกผลเชื้อดื้อยา</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ชื่อ - สกุล</TableCell>
            <TableCell>HN</TableCell>
            <TableCell>ที่อยู่</TableCell>
          {/*  <TableCell>ผลเชื้อดื้อยา</TableCell>
             <TableCell>สิ่งส่งตรวจที่พบ</TableCell>
            <TableCell>วันที่พบ</TableCell>
            <TableCell>วินิจฉัย</TableCell>
            <TableCell>ยาที่ได้รับ</TableCell>
            <TableCell>วันที่ตรวจเชื้อซ้ำ 6 เดือน</TableCell>
            <TableCell>Discharge</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.hn}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.hn}</TableCell>
              <TableCell>{row.address}</TableCell>
            {/*  <TableCell>{row.results}</TableCell>
               <TableCell>{row.Specimen}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.dx}</TableCell>
              <TableCell>{row.drug}</TableCell>
              <TableCell>{row.redate}</TableCell>
              <TableCell>{row.Discharge}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
