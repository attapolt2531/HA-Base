import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'ชื่อ - สกุล',minWidth: 170 },
  { id: 'hn', label: 'HN' },
  {
    id: 'address',
    label: 'ที่อยู่',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'results',
    label: 'ผลเชื้อดื้อยา',
    // minWidth: 170,
    align: 'right',
  },
  {
    id: 'Specimen',
    label: 'สิ่งส่งตรวจที่พบ',
    // minWidth: 170,
    align: 'right',
  },
  {
    id: 'date',
    label: 'วันที่พบ',
    // minWidth: 170,
    align: 'right',
  },
  {
    id: 'dx',
    label: 'วินิจฉัย',
    // minWidth: 170,
    align: 'right',
  },
  {
    id: 'drug',
    label: 'ยาที่ได้รับ',
    // minWidth: 170,
    align: 'right',
  },
  {
    id: 'redate',
    label: 'วันที่ตรวจเชื้อซ้ำ 6 เดือน',
    // minWidth: 170,
    align: 'right',
  },
  {
    id: 'Discharge',
    label: 'Discharge',
    // minWidth: 170,
    align: 'right',
  },
];

function createData(name, hn, address, results, Specimen, date, dx, drug, redate, Discharge) {
  
  return { name, hn, address, results, Specimen, date, dx, drug, redate, Discharge};
}

const rows = [
  createData('นายทดสอบ ทดสอบระบบ', '000011012','109 หมู่ 4 ต.สร้างคอม อ.สร้างคอม จ.อุดรธานี', 'Escerichia coli ESBL', 'Hemocultire', '13 พฤศจิกายน 2566', 'Pneumonai','Ceftriaxone', '13 เมษายน 2567'),
  createData('นายทดสอบ ทดสอบระบบ', '000011012','109 หมู่ 4 ต.สร้างคอม อ.สร้างคอม จ.อุดรธานี', 'Escerichia coli ESBL', 'Hemocultire', '13 พฤศจิกายน 2566', 'Pneumonai','Ceftriaxone', '13 เมษายน 2567'),
  createData('นายทดสอบ ทดสอบระบบ', '000011012','109 หมู่ 4 ต.สร้างคอม อ.สร้างคอม จ.อุดรธานี', 'Escerichia coli ESBL', 'Hemocultire', '13 พฤศจิกายน 2566', 'Pneumonai','Ceftriaxone', '13 เมษายน 2567'),
  createData('นายทดสอบ ทดสอบระบบ', '000011012','109 หมู่ 4 ต.สร้างคอม อ.สร้างคอม จ.อุดรธานี', 'Escerichia coli ESBL', 'Hemocultire', '13 พฤศจิกายน 2566', 'Pneumonai','Ceftriaxone', '13 เมษายน 2567'),
  createData('นายทดสอบ ทดสอบระบบ', '000011012','109 หมู่ 4 ต.สร้างคอม อ.สร้างคอม จ.อุดรธานี', 'Escerichia coli ESBL', 'Hemocultire', '13 พฤศจิกายน 2566', 'Pneumonai','Ceftriaxone', '13 เมษายน 2567'),
  createData('นายทดสอบ ทดสอบระบบ', '000011012','109 หมู่ 4 ต.สร้างคอม อ.สร้างคอม จ.อุดรธานี', 'Escerichia coli ESBL', 'Hemocultire', '13 พฤศจิกายน 2566', 'Pneumonai','Ceftriaxone', '13 เมษายน 2567'),
  createData('นายทดสอบ ทดสอบระบบ', '000011012','109 หมู่ 4 ต.สร้างคอม อ.สร้างคอม จ.อุดรธานี', 'Escerichia coli ESBL', 'Hemocultire', '13 พฤศจิกายน 2566', 'Pneumonai','Ceftriaxone', '13 เมษายน 2567'),
  createData('นายทดสอบ ทดสอบระบบ', '000011012','109 หมู่ 4 ต.สร้างคอม อ.สร้างคอม จ.อุดรธานี', 'Escerichia coli ESBL', 'Hemocultire', '13 พฤศจิกายน 2566', 'Pneumonai','Ceftriaxone', '13 เมษายน 2567'),
  createData('นายทดสอบ ทดสอบระบบ', '000011012','109 หมู่ 4 ต.สร้างคอม อ.สร้างคอม จ.อุดรธานี', 'Escerichia coli ESBL', 'Hemocultire', '13 พฤศจิกายน 2566', 'Pneumonai','Ceftriaxone', '13 เมษายน 2567'),
  createData('นายทดสอบ ทดสอบระบบ', '000011012','109 หมู่ 4 ต.สร้างคอม อ.สร้างคอม จ.อุดรธานี', 'Escerichia coli ESBL', 'Hemocultire', '13 พฤศจิกายน 2566', 'Pneumonai','Ceftriaxone', '13 เมษายน 2567'),
  createData('นายทดสอบ ทดสอบระบบ', '000011012','109 หมู่ 4 ต.สร้างคอม อ.สร้างคอม จ.อุดรธานี', 'Escerichia coli ESBL', 'Hemocultire', '13 พฤศจิกายน 2566', 'Pneumonai','Ceftriaxone', '13 เมษายน 2567'),
  createData('นายทดสอบ ทดสอบระบบ', '000011012','109 หมู่ 4 ต.สร้างคอม อ.สร้างคอม จ.อุดรธานี', 'Escerichia coli ESBL', 'Hemocultire', '13 พฤศจิกายน 2566', 'Pneumonai','Ceftriaxone', '13 เมษายน 2567'),
  createData('นายทดสอบ ทดสอบระบบ', '000011012','109 หมู่ 4 ต.สร้างคอม อ.สร้างคอม จ.อุดรธานี', 'Escerichia coli ESBL', 'Hemocultire', '13 พฤศจิกายน 2566', 'Pneumonai','Ceftriaxone', '13 เมษายน 2567'),
  createData('นายทดสอบ ทดสอบระบบ', '000011012','109 หมู่ 4 ต.สร้างคอม อ.สร้างคอม จ.อุดรธานี', 'Escerichia coli ESBL', 'Hemocultire', '13 พฤศจิกายน 2566', 'Pneumonai','Ceftriaxone', '13 เมษายน 2567'),
  createData('นายทดสอบ ทดสอบระบบ', '000011012','109 หมู่ 4 ต.สร้างคอม อ.สร้างคอม จ.อุดรธานี', 'Escerichia coli ESBL', 'Hemocultire', '13 พฤศจิกายน 2566', 'Pneumonai','Ceftriaxone', '13 เมษายน 2567'),
  createData('นายทดสอบ ทดสอบระบบ', '000011012','109 หมู่ 4 ต.สร้างคอม อ.สร้างคอม จ.อุดรธานี', 'Escerichia coli ESBL', 'Hemocultire', '13 พฤศจิกายน 2566', 'Pneumonai','Ceftriaxone', '13 เมษายน 2567'),
];

export default function ColumnGroupingTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}