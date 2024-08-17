import React from 'react';
import { Card, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface VehiclePageProps {
  type: string;
}

const mockData = [
  { id: 1, vehicleType: 'ÇEKİCİ', plateNumber: '22M121', brand: 'BRAND 1', model: 'MODEL 1', status: 'Boş/Hazır', ownership: 'Özmal' },
  { id: 2, vehicleType: 'ÇEKİCİ', plateNumber: '22M222', brand: 'BRAND 2', model: 'MODEL 2', status: 'Boş/Hazır', ownership: 'Yabancı' },
];

const TABLE_HEAD = [
  { id: '', label: '' },
  { id: 'vehicleType', label: 'Araç Cinsi' },
  { id: 'plateNumber', label: 'Plaka' },
  { id: 'brand', label: 'Markası' },
  { id: 'model', label: 'Model' },
  { id: 'status', label: 'Durum' },
  { id: 'ownership', label: 'Mülkiyet' },
  { id: '', label: '' },
];

const VehiclePages: React.FC<VehiclePageProps> = ({ type }) => {
  let filteredData = mockData;

  if (type === 'Özmal Arçlar') {
    filteredData = mockData.filter(vehicle => vehicle.ownership === 'Özmal');
  } else if (type === 'Yabancı Araçlar') {
    filteredData = mockData.filter(vehicle => vehicle.ownership === 'Yabancı');
  }

  return (
    <Card sx={{ margin: 'auto', minWidth: '85%', marginTop: 5, marginBottom: 5, p: 2, boxShadow: 'rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) 0px 16px 32px -4px' }}>
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
            {filteredData.map(vehicle => (
              <TableRow key={vehicle.id} sx={{ borderBottom: 'hidden', '&:hover': { bgcolor: '#F4F6F8' } }}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell align='left'>{vehicle.vehicleType}</TableCell>
                <TableCell align='left'>{vehicle.plateNumber}</TableCell>
                <TableCell align='left'>{vehicle.brand}</TableCell>
                <TableCell align='left'>{vehicle.model}</TableCell>
                <TableCell align='left'>{vehicle.status}</TableCell>
                <TableCell align='left'>{vehicle.ownership}</TableCell>
                <TableCell align='left'><MoreVertIcon /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default VehiclePages;
