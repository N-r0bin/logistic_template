import { visuallyHidden } from '@mui/utils';
import { Box, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';


type SortingSelectingHeadProps = {
  orderBy: string;
  rowCount: number;
  onFilterName?: (value: string) => void;

  numSelected: number;
  onRequestSort: (property: string) => void;
  onSelectAllClick: (checked: boolean) => void;
  order: 'asc' | 'desc';
  headLabel: {
    id: string;
    numeric: boolean;
    disablePadding: boolean;
    label: string;
  }[];
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
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          
        </TableCell>
        {headLabel.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={() => onRequestSort(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={{ ...visuallyHidden }}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
