import { useState } from 'react';
import { Box, Checkbox, TableRow, TableCell, TableHead, TableSortLabel } from '@mui/material';

// Mock data
const mockData = [
  { id: 1, customerCompanyName: 'Company 1', address: 'Address 1', phone: '123456789', currentCode: '1001' },
  { id: 2, customerCompanyName: 'Company 2', address: 'Address 2', phone: '987654321', currentCode: '1002' },
];

type SortingSelectingHeadProps = {
  orderBy: string;
  rowCount: number;
  onFilterName?: (value: string) => void;
  numSelected: number;
  onRequestSort: (property: string) => void;
  order: 'asc' | 'desc';
  headLabel: {
    id: string;
    numeric: boolean;
    disablePadding: boolean;
    label: string;
  }[];
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
};


export default function SortingSelectingHead({
  order,
  orderBy,
  rowCount,
  headLabel,
  numSelected,
  onRequestSort,
  onFilterName,
  onSelectAllClick
}: SortingSelectingHeadProps) {
  const [selected, setSelected] = useState<number[]>([]);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = mockData.map((item) => item.id);
      setSelected(newSelected);
    } else {
      setSelected([]);
    }
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
        </TableCell>
        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : undefined}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={() => onRequestSort(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
