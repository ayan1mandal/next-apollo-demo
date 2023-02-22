import { styled, Card, Typography } from '@mui/material';
import { pixelToRem } from '../../utils';

export const CardContainer = styled(Card)`
  min-height: ${pixelToRem(100)};
`;

export const EmailLabel = styled('a')(({ theme }) => ({
  fontSize: `${pixelToRem(8)}`,
  marginBottom: `${pixelToRem(8)}`,
  display: 'block',
  color: `${theme.colors.brandSecondary}`,
}));

export const AddressLabel = styled(Typography)(({ theme }) => ({
  fontSize: `${pixelToRem(10)}`,
  marginBottom: `${pixelToRem(8)}`,
  display: 'block',
  color: `${theme.colors.brandSecondary}`,
}));

export const PhoneLabel = styled('a')(({ theme }) => ({
  fontSize: `${pixelToRem(8)}`,
  display: 'block',
  color: `${theme.colors.brandSecondary}`,
}));
