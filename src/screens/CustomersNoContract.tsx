import React, { useState } from 'react';
import { Box, Card, Checkbox, IconButton, InputAdornment, InputBase, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, ThemeProvider, createTheme } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

// Mock data
const mockData = [
  { id: 1, customerCompanyName: 'Company 1', address: 'Address 1', phone: '129056009', currentCode: '1001' },
  { id: 2, customerCompanyName: 'Company 2', address: 'Address 2', phone: '888754401', currentCode: '1002' },
];

const TABLE_HEAD = [
  { id: '', label: '' },
  { id: 'CustomerCompany', label: 'Firma' },
  { id: 'address', label: 'Adres' },
  { id: 'phone', label: 'Telefon Numarası' },
  { id: 'CurrentCode', label: 'Cariir Kodu' },
  { id: '', label: '' },
];

const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: "'Be Vietnam', sans-serif",
          fontWeight: 500,
          fontSize: '1rem',
          color: 'rgb(33, 43, 54)',
          boxSizing: 'border-box',
          cursor: 'text',
          display: 'inline-flex',
          alignItems: 'center',
          position: 'relative',
          borderRadius: '8px',
          paddingLeft: '14px',
          width: '240px',
          transition: 'box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, width 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          border: '1px solid #DCE0E4',
          '&:focus': {
            boxShadow: 'rgb(0 0 0 / 20%) 0px 0px 10px, rgb(0 0 0 / 14%) 0px 4px 8px',
            width: '400px'
          }
        },
      },
    },
  },
});

const buttonStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  appearance: 'none',
  textDecoration: 'none',
  fontFamily: "'Be Vietnam', sans-serif",
  fontWeight: 700,
  fontSize: '0.8125rem',
  lineHeight: 1.71429,
  textTransform: 'capitalize',
  minWidth: 10,
  padding: '4px 10px',
  borderRadius: 8,
  transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  color: 'rgb(255, 255, 255)',
  backgroundColor: "#FF5500",
  boxShadow: 'rgba(145, 158, 171, 0.2) 0px 3px 1px -2px, rgba(145, 158, 171, 0.14) 0px 2px 2px 0px, rgba(145, 158, 171, 0.12) 0px 1px 5px 0px',
  width: '80%',
  '&:hover': {
    backgroundColor: '#EA4E00',
  },
};

export default function CustomersNoContract() {
  const [selected, setSelected] = useState<number[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [clicked, setClicked] = useState(false)

  const handleInputBaseClick = () => {
    setClicked(true)
  }

  const handleInputBaseBlur = () => {
    setClicked(false);
  }

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: { target: { value: string; }; }) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, mockData.length - page * rowsPerPage);

  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ margin: 'auto', minWidth: '85%', marginTop: 5, marginBottom: 5, p: 2, boxShadow: 'rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) 0px 16px 32px -4px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
          <InputBase
            placeholder="Ara..."
            onClick={handleInputBaseClick}
            onBlur={handleInputBaseBlur}
            sx={{
              width: clicked ? '400px' : '240px',
              transition: 'width 10 cubic-bezier(0.4, 0, 0.2, 1)',
              border: clicked ? '1px solid #F7F8F9' : '1px solid #DCE0E4',
              boxShadow: clicked ? 'rgb(0 0 0 / 20%) 0px 0px 10px, rgb(0 0 0 / 14%) 0px 4px 8px' : 'none',
            }}
            startAdornment={(
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#9DA8B4' }} />
              </InputAdornment>
            )}
          />
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1, mr: 17 }}>
            <IconButton sx={buttonStyle}>
              Sözleşme Ekle
            </IconButton>
            <IconButton sx={buttonStyle}>
              Müşteri Ekle
            </IconButton>
          </Box>
        </Box>
        <TableContainer sx={{ minWidth: 800 }}>
          <Table size="small">
            <TableHead sx={{ backgroundColor: '#F4F6F8', borderRadius: '10px' }}>
              <TableRow>
                {TABLE_HEAD.map((headCell) => (
                  <TableCell key={headCell.id} align='left' sx={{ color: 'rgb(99, 115, 129)', borderBottom: 'hidden' }}>
                    {headCell.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {mockData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      borderBottom: 'hidden',
                      '&:hover': { bgcolor: '#F4F6F8' },
                    }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={selected.indexOf(row.id) !== -1}
                        onChange={(event) => {
                          const selectedIndex = selected.indexOf(row.id);
                          const newSelected = [...selected];

                          if (selectedIndex === -1) {
                            newSelected.push(row.id);
                          } else {
                            newSelected.splice(selectedIndex, 1);
                          }

                          setSelected(newSelected);
                        }}
                      />
                    </TableCell>
                    <TableCell align='left'>{row.customerCompanyName}</TableCell>
                    <TableCell align='left'>{row.address}</TableCell>
                    <TableCell align='left'>{row.phone}</TableCell>
                    <TableCell align='left'>{row.currentCode}</TableCell>
                    <TableCell align='left'><MoreVertIcon /></TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={5} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[25, 50, 100]}
          component='div'
          count={mockData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Sayfa Başına Satır"
          sx={{
            '& .css-qojj5e-MuiInputBase-root-MuiTablePagination-select': {
              width: '70px',
            },
            '& .MuiTablePagination-root': {
              width: '5px',
            },
            '& .MuiTablePagination-select': {
              width: '5px',
            },
          }}
        />
      </Card>
    </ThemeProvider>
  );
}
