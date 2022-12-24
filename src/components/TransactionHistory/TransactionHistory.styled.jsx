import styled from 'styled-components';
import { color } from 'styled-system';

export const TableHead = styled.thead`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.white};

  text-transform: uppercase;
  text-align: center;
  background-color: ${p => p.theme.colors.backgroundTableHead};
`;

export const TableBody = styled.tbody`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.gray};
`;

export const TableRow = styled.tr`
  background-color: ${p =>
    p.idx % 2 ? p.theme.colors.backgroundTable : p.theme.colors.white};
  ${color}
`;

export const TableHeader = styled.th`
  padding: 8px;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.border};
`;
export const TableData = styled.td`
  text-transform: capitalize;
  text-align: center;
  padding: 8px;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.border};
`;

export const Table = styled.table`
  font-family: ${p => p.theme.fonts.body};
  width: ${p => p.theme.sizes.table}px;
  margin: 20px auto;
  padding: 0;
  border-collapse: collapse;
  box-shadow: ${p => p.theme.shadows.main};
  border-radius: ${p => p.theme.radii.normal};
`;
