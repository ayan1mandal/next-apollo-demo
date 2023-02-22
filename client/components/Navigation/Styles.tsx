import { Box, styled, Button, Menu } from '@mui/material';
import { pixelToRem } from '../../utils';
import Link from 'next/link';

export const MobileHomeLink = styled(Link)(({ theme }) => ({
  marginRight: `${pixelToRem(16)}`,
  display: 'none',
  flexGrow: 1,
  fontFamily: 'monospace',
  fontWeight: 700,
  fontSize: `${pixelToRem(16)}`,
  letterSpacing: `${pixelToRem(1)}`,
  color: 'inherit',
  textDecoration: 'none',

  [theme.breakpoints.only('xs')]: {
    display: 'flex',
  },
}));

export const MobileMenuContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: 'none',

  [theme.breakpoints.only('xs')]: {
    display: 'flex',
  },
}));

export const MobileMenu = styled(Menu)(({ theme }) => ({
  display: 'none',

  [theme.breakpoints.only('xs')]: {
    display: 'block',
  },
}));

export const MobileLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  textTransform: 'uppercase',
  color: `${theme.colors.black}`,
  fontSize: `${pixelToRem(12)}`,
}));

export const DesktopHomeLink = styled(Link)(({ theme }) => ({
  marginRight: `${pixelToRem(16)}`,
  display: 'flex',
  fontFamily: 'monospace',
  fontSize: `${pixelToRem(16)}`,
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',

  [theme.breakpoints.only('xs')]: {
    display: 'none',
  },
}));

export const DesktopMenuContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexGrow: 1,

  [theme.breakpoints.only('xs')]: {
    display: 'none',
  },
}));

export const DesktopMenuLink = styled(Button)(({ theme }) => ({
  display: 'block',
  margin: `0 ${pixelToRem(16)}`,
  fontSize: `${pixelToRem(8)}`,
  textTransform: 'uppercase',
  color: `${theme.colors.white}`,
}));

export const DesktopLink = styled(Link)`
  text-decoration: none;
`;
