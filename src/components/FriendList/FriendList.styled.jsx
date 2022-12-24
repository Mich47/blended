import styled from 'styled-components';

export const FriendName = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
`;

export const FriendStatus = styled.span`
  border-radius: ${p => p.theme.radii.round};
  width: 16px;
  height: 16px;
  background-color: ${p =>
    p.isOnline ? p.theme.colors.green : p.theme.colors.gray};
`;

export const FriendAvatar = styled.img`
  border-radius: ${p => p.theme.radii.normal};
  width: 64px;
`;

export const FriendListStyled = styled.ul`
  font-family: ${p => p.theme.fonts.body};
  width: ${p => p.theme.sizes.container}px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 8px;
  flex-direction: column;
`;
export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.border};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.main};
`;
