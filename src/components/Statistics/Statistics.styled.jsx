import styled from 'styled-components';
import { color, typography } from 'styled-system';

export const StatTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.gray};
  text-transform: uppercase;
  text-align: center;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const StatText = styled.span`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.white};
  ${typography}
`;
export const StatList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;
export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-basis: 100%;
  padding: 16px 0;

  border-top: ${p => p.theme.borders.normal};
  border-left: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.border};
  ${color}
`;
